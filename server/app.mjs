import { registerMetadata } from './metadata.mjs';
import express from 'express';
import { randomUUID } from 'node:crypto';
import { hashPassword, verifyPassword, signSession, readSession, publicUser } from './auth.mjs';
import { transaction } from './db.mjs';
import { ApiError, postSelect, publicPost, validatePost } from './posts.mjs';
import { registerContact } from './contact.mjs';
import { mailConfig, validEmail } from './mail.mjs';

export function createApi({ pool, env, sendMail }) {
  if (!env.SESSION_SECRET || env.SESSION_SECRET.length < 32) throw new Error('SESSION_SECRET must have at least 32 characters.');
  const app = express();
  app.disable('x-powered-by');
  if (env.TRUST_PROXY === '1') app.set('trust proxy', 1);
  const secure = env.NODE_ENV === 'production';
  const cookieOptions = { httpOnly: true, secure, sameSite: 'lax', path: '/api', maxAge: 8 * 3600 * 1000 };
  const attempts = new Map();
  app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store'); res.set('X-Content-Type-Options', 'nosniff');
    const expectedOrigin = env.APP_ORIGIN || `${req.protocol}://${req.get('host')}`;
    if (req.headers.origin && req.headers.origin !== expectedOrigin) return res.status(403).json({ message: 'This request origin is not allowed.' });
    if (req.headers.origin) { res.set('Access-Control-Allow-Origin', expectedOrigin); res.set('Access-Control-Allow-Credentials', 'true'); res.vary('Origin'); }
    if (req.method === 'OPTIONS') { res.set('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE,OPTIONS'); res.set('Access-Control-Allow-Headers','Content-Type,X-CSRF-Token'); return res.sendStatus(204); }
    if (!['GET','HEAD'].includes(req.method) && (req.headers.origin !== expectedOrigin || !req.is('application/json'))) return res.status(403).json({ message: 'A same-origin JSON request is required.' });
    next();
  });
  app.use(express.json({ limit: '8mb' }));
  const authenticate = async (req, res, next) => {
    const token = req.headers.cookie?.split(';').map(item => item.trim()).find(item => item.startsWith('bb_session='))?.slice(11);
    const session = readSession(token, env.SESSION_SECRET);
    if (!session) throw new ApiError('Please sign in to continue.', 401);
    const { rows: [user] } = await pool.query('SELECT * FROM users WHERE id=$1 AND is_active=true', [session.uid]);
    if (!user || user.session_version !== session.ver) throw new ApiError('Your session expired. Please sign in again.', 401);
    if (!['GET','HEAD'].includes(req.method) && req.get('X-CSRF-Token') !== session.csrf) throw new ApiError('Refresh the page before trying again.', 403);
    req.user = user; req.session = session; next();
  };
  const edit = (req, res, next) => { if (!['admin','editor'].includes(req.user.user_type)) throw new ApiError('Your account has read-only access.', 403); next(); };
  const admin = (req, res, next) => { if (req.user.user_type !== 'admin') throw new ApiError('Administrator access is required.', 403); next(); };

  app.get('/health', async (req, res) => { await pool.query('SELECT 1'); res.json({ ok: true }); });
  app.post('/auth/login', async (req, res) => {
    const username = typeof req.body?.username === 'string' ? req.body.username.trim() : '';
    const password = typeof req.body?.password === 'string' ? req.body.password : '';
    if (!username || username.length > 254 || !password || password.length > 200) throw new ApiError('Enter your username and password.');
    const key = `${req.ip}:${username.toLowerCase()}`; const ipKey = `ip:${req.ip}`; const now = Date.now();
    for (const [key, value] of attempts) if (value.until < now) attempts.delete(key);
    const record = attempts.get(key) || { count: 0, until: now + 15 * 60000 };
    const ipRecord = attempts.get(ipKey) || { count: 0, until: now + 15 * 60000 };
    if (record.count >= 8 || ipRecord.count >= 40 || attempts.size > 10000) throw new ApiError('Too many login attempts. Try again later.', 429);
    ipRecord.count++; attempts.set(ipKey, ipRecord);
    record.count++; attempts.set(key, record);
    const { rows: [user] } = await pool.query('SELECT * FROM users WHERE lower(username)=lower($1) OR lower(email)=lower($1)', [username]);
    const valid = await verifyPassword(password, user?.password_hash);
    if (!valid || !user?.is_active) throw new ApiError('The username or password is incorrect.', 401);
    attempts.delete(key); attempts.delete(ipKey);
    const session = signSession(user, env.SESSION_SECRET);
    res.cookie('bb_session', session.token, cookieOptions); res.json({ user: publicUser(user), csrfToken: session.csrf });
  });
  app.get('/auth/session', authenticate, (req, res) => res.json({ user: publicUser(req.user), csrfToken: req.session.csrf }));
  app.post('/auth/logout', authenticate, async (req, res) => {
    await pool.query('UPDATE users SET session_version=session_version+1 WHERE id=$1', [req.user.id]);
    res.clearCookie('bb_session', { ...cookieOptions, maxAge: undefined }); res.json({ ok: true });
  });
  app.get('/posts', async (req, res) => {
    const result = await pool.query(`${postSelect} WHERE p.status='published' AND p.post_type='post' ORDER BY p.published_at DESC,p.id`);
    res.json(result.rows.map(publicPost));
  });
  app.get('/posts/:slug', async (req, res) => {
    const { rows: [post] } = await pool.query(`${postSelect} WHERE p.status='published' AND (p.slug=$1 OR p.id=$1) LIMIT 1`, [req.params.slug]);
    if (!post) throw new ApiError('Article not found.', 404); res.json(publicPost(post));
  });
  app.get('/admin/dashboard', authenticate, async (req, res) => {
    const posts = (await pool.query("SELECT count(*) FILTER (WHERE status='published')::int AS published, count(*) FILTER (WHERE status='draft')::int AS drafts, count(*) FILTER (WHERE status='trash')::int AS trash FROM posts")).rows[0];
    if (req.user.user_type !== 'admin') return res.json({ posts });
    const submissions = (await pool.query("SELECT count(*)::int AS total, count(*) FILTER (WHERE status='new')::int AS new, count(*) FILTER (WHERE status='reviewed')::int AS reviewed FROM contact_submissions")).rows[0];
    const users = (await pool.query('SELECT count(*)::int AS total, count(*) FILTER (WHERE is_active)::int AS active FROM users')).rows[0];
    const settings = (await pool.query('SELECT notification_email,send_customer_email FROM contact_settings WHERE id=true')).rows[0];
    let configured = false;
    try { const config = await mailConfig(pool,env); configured = Boolean(config.apiKey && validEmail(config.senderEmail)); } catch { /* Show setup needed if stored credentials cannot be read. */ }
    res.json({ posts, submissions, users, email: { configured, notifications: Boolean(settings?.notification_email), customerConfirmations: Boolean(settings?.send_customer_email) } });
  });
  app.get('/admin/posts', authenticate, async (req, res) => res.json((await pool.query(`${postSelect} ORDER BY p.updated_at DESC,p.id`)).rows.map(publicPost)));
  app.post('/admin/posts', authenticate, edit, async (req, res) => {
    const data = validatePost(req.body); const id = randomUUID();
    const post = await transaction(pool, async client => {
      await client.query('INSERT INTO posts(id,slug,title,status,author_id,published_at) VALUES($1,$2,$3,$4,$5,CASE WHEN $4=\'published\' THEN now() ELSE NULL END)', [id,data.slug,data.title,data.status,req.user.id]);
      await client.query('INSERT INTO postmeta(post_id,data) VALUES($1,$2::jsonb)', [id,JSON.stringify(data)]);
      return publicPost((await client.query(`${postSelect} WHERE p.id=$1`, [id])).rows[0]);
    }); res.status(201).json(post);
  });
  app.put('/admin/posts/:id', authenticate, edit, async (req, res) => {
    const data = validatePost(req.body);
    const post = await transaction(pool, async client => {
      const { rows: [old] } = await client.query('SELECT * FROM posts WHERE id=$1 FOR UPDATE', [req.params.id]);
      if (!old) throw new ApiError('Post not found.', 404);
      if (req.body.version !== old.version) throw new ApiError('This post was changed by another editor. Reload it before saving.', 409);
      await client.query('UPDATE posts SET slug=$2,title=$3,status=$4,version=version+1,updated_at=now(),published_at=CASE WHEN $4=\'published\' THEN COALESCE(published_at,now()) ELSE published_at END WHERE id=$1', [old.id,data.slug,data.title,data.status]);
      await client.query('UPDATE postmeta SET data=$2::jsonb,updated_at=now() WHERE post_id=$1', [old.id,JSON.stringify(data)]);
      return publicPost((await client.query(`${postSelect} WHERE p.id=$1`, [old.id])).rows[0]);
    }); res.json(post);
  });
  app.post('/admin/posts/bulk', authenticate, edit, async (req, res) => {
    const { ids, action } = req.body || {};
    if (!Array.isArray(ids) || !ids.length || ids.length > 1000 || ids.some(id => typeof id !== 'string') || !['trash','restore','delete'].includes(action)) throw new ApiError('Select posts and a valid action.');
    await transaction(pool, async client => {
      const { rows } = await client.query('SELECT id,status FROM posts WHERE id=ANY($1::text[]) FOR UPDATE', [ids]);
      if (rows.length !== new Set(ids).size) throw new ApiError('Some selected posts no longer exist.', 409);
      if (['restore','delete'].includes(action) && rows.some(post => post.status !== 'trash')) throw new ApiError('Only posts in Trash can be restored or deleted.');
      if (action === 'delete') await client.query('DELETE FROM posts WHERE id=ANY($1::text[])', [ids]);
      else {
        const status = action === 'trash' ? 'trash' : 'draft';
        await client.query('UPDATE posts SET status=$2,version=version+1,updated_at=now() WHERE id=ANY($1::text[])', [ids,status]);
        await client.query("UPDATE postmeta SET data=jsonb_set(data,'{status}',to_jsonb($2::text)),updated_at=now() WHERE post_id=ANY($1::text[])", [ids,status]);
      }
    }); res.json({ ok: true });
  });
  app.get('/admin/users', authenticate, admin, async (req, res) => res.json((await pool.query('SELECT * FROM users ORDER BY created_at')).rows.map(publicUser)));
  const userInput = body => {
    if (!body || !['username','email','name','userType'].every(key => typeof body[key] === 'string') || !/^[a-zA-Z0-9._-]{3,60}$/.test(body.username) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email) || !body.name.trim() || body.name.length > 100 || !['admin','editor','viewer'].includes(body.userType)) throw new ApiError('Enter valid user details and a user type.');
    if (body.password && (typeof body.password !== 'string' || body.password.length < 12 || body.password.length > 200)) throw new ApiError('Passwords must be between 12 and 200 characters.');
    return body;
  };
  app.post('/admin/users', authenticate, admin, async (req, res) => {
    const data = userInput(req.body); if (!data.password) throw new ApiError('A password is required.');
    const hash = await hashPassword(data.password);
    const { rows: [user] } = await pool.query('INSERT INTO users(id,username,email,name,password_hash,user_type,is_active) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *', [randomUUID(),data.username,data.email,data.name,hash,data.userType,data.isActive !== false]);
    res.status(201).json(publicUser(user));
  });
  app.patch('/admin/users/:id', authenticate, admin, async (req, res) => {
    const data = userInput(req.body); const hash = data.password ? await hashPassword(data.password) : null;
    const user = await transaction(pool, async client => {
      await client.query('SELECT pg_advisory_xact_lock(815003)');
      const actor = (await client.query('SELECT * FROM users WHERE id=$1', [req.user.id])).rows[0];
      if (!actor?.is_active || actor.user_type !== 'admin' || actor.session_version !== req.user.session_version) throw new ApiError('Administrator access changed. Sign in again.', 403);
      const { rows: [old] } = await client.query('SELECT * FROM users WHERE id=$1 FOR UPDATE', [req.params.id]);
      if (!old) throw new ApiError('User not found.', 404);
      if (old.user_type === 'admin' && old.is_active && (data.userType !== 'admin' || data.isActive === false)) {
        const count = await client.query("SELECT count(*)::int AS total FROM users WHERE user_type='admin' AND is_active=true");
        if (count.rows[0].total <= 1) throw new ApiError('You cannot disable or demote the last active administrator.');
      }
      return (await client.query('UPDATE users SET username=$2,email=$3,name=$4,password_hash=COALESCE($5,password_hash),user_type=$6,is_active=$7,session_version=session_version+1,updated_at=now() WHERE id=$1 RETURNING *', [old.id,data.username,data.email,data.name,hash,data.userType,data.isActive !== false])).rows[0];
    }); res.json(publicUser(user));
  });
  registerMetadata(app, { pool, authenticate, admin });
  registerContact(app, { pool, env, authenticate, admin, sendMail });
  app.use((req,res) => res.status(404).json({ message: 'API endpoint not found.' }));
  app.use((error, req, res, next) => {
    if (res.headersSent) return next(error);
    if (error.code === '23505') return res.status(409).json({ message: 'That username, email, or post slug is already in use.' });
    const status = error instanceof ApiError ? error.status : error.type === 'entity.too.large' ? 413 : error.type === 'entity.parse.failed' ? 400 : 503;
    res.status(status).json({ message: error instanceof ApiError ? error.message : status === 413 ? 'Content exceeds the 8 MB limit. Reduce image sizes.' : status === 400 ? 'Invalid JSON request.' : 'The database service is temporarily unavailable. Please try again.' });
  });
  return app;
}
