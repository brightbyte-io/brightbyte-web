import './config.mjs';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import express from 'express';
import { randomUUID } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { createPool } from './db.mjs';
import { hashPassword } from './auth.mjs';
import { createApi } from './app.mjs';
import { mailConfig } from './mail.mjs';

test('PostgreSQL admin API: authentication, roles, JSONB posts and deletion', { timeout: 180000, skip: !process.env.DATABASE_URL }, async t => {
  const base = createPool(process.env);
  const schema = `bb_test_${randomUUID().replaceAll('-','')}`;
  assert.match(schema, /^bb_test_[a-f0-9]{32}$/);
  const rewrite = sql => sql.replace(/\b(users|posts|postmeta|contact_settings|contact_submissions|mail_settings)\b/g, `"${schema}".$1`);
  const pool = {
    query: (sql, values) => base.query(rewrite(sql), values),
    connect: async () => { const client = await base.connect(); return { query: (sql, values) => client.query(rewrite(sql), values), release: () => client.release() }; },
  };
  let server;
  t.after(async () => {
    if (server) { server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); }
    // Drop only the exact temporary schema this test generated, never public.
    assert.match(schema, /^bb_test_[a-f0-9]{32}$/);
    await base.query(`DROP SCHEMA IF EXISTS "${schema}" CASCADE`); await base.end();
  });
  await base.query(`CREATE SCHEMA "${schema}"`);
  await pool.query(await readFile(new URL('./schema.sql', import.meta.url), 'utf8'));
  const adminId = randomUUID(); const password = 'Integration-test-password-2026';
  await pool.query('INSERT INTO users(id,username,email,name,password_hash,user_type) VALUES($1,$2,$3,$4,$5,$6)', [adminId,'admin','admin@test.invalid','Test Admin',await hashPassword(password),'admin']);
  const emails = []; let failMail = false;
  const app = express(); app.use('/api',createApi({pool,env:{SESSION_SECRET:'test-session-secret-at-least-32-characters',NODE_ENV:'test'},sendMail: async payload => { if (failMail) throw new Error('Simulated provider failure'); emails.push(payload); return 'accepted by Brevo'; }}));
  server = app.listen(0,'127.0.0.1'); await new Promise(resolve => server.once('listening',resolve));
  const origin = `http://127.0.0.1:${server.address().port}`;
  const request = async (url, { method = 'GET', body, session, headers = {} } = {}) => {
    const response = await fetch(`${origin}/api${url}`, {method,headers:{Origin:origin,...(body ? {'Content-Type':'application/json'}:{}),...(session ? {Cookie:session.cookie,'X-CSRF-Token':session.csrfToken}:{}),...headers},...(body ? {body:JSON.stringify(body)}:{})});
    return {status:response.status,body:await response.json(),cookie:response.headers.get('set-cookie')};
  };
  const login = async username => { const result=await request('/auth/login',{method:'POST',body:{username,password}});assert.equal(result.status,200);return {cookie:result.cookie.split(';')[0],csrfToken:result.body.csrfToken}; };
  await t.test('dashboard returns role-scoped summaries', async () => {
    assert.equal((await request('/admin/dashboard')).status,401);
    const session = await login('admin');
    const overview = await request('/admin/dashboard',{session});
    assert.equal(overview.status,200); assert.equal(overview.body.posts.published,0);
    assert.equal(overview.body.submissions.total,0); assert.equal(overview.body.users.total,1);
    assert.equal(overview.body.email.configured,false);
    assert.equal('apiKey' in overview.body.email,false);
  });
  await t.test('shared mail settings encrypt keys, retain blank keys and explicitly clear them', async () => {
    assert.equal((await request('/admin/mail-settings')).status,401);
    const session = await login('admin');
    const config = { senderEmail:'sender@test.invalid',senderName:'Test Sender',apiKey:'test-brevo-secret',clearApiKey:false };
    assert.equal((await request('/admin/mail-settings',{method:'PUT',session,body:{...config,senderEmail:'invalid'}})).status,400);
    assert.equal((await request('/admin/mail-settings',{method:'PUT',session,body:config})).status,200);
    const read = (await request('/admin/mail-settings',{session})).body;
    assert.equal(read.apiKeyConfigured,true); assert.equal(read.senderEmail,config.senderEmail);
    assert.equal(JSON.stringify(read).includes(config.apiKey),false);
    const encrypted = (await pool.query('SELECT api_key_encrypted FROM mail_settings WHERE id=true')).rows[0].api_key_encrypted;
    assert.notEqual(encrypted,config.apiKey); assert.equal(encrypted.includes(config.apiKey),false);
    const env = { SESSION_SECRET:'test-session-secret-at-least-32-characters' };
    assert.equal((await mailConfig(pool,env)).apiKey,config.apiKey);
    assert.equal((await request('/admin/mail-settings',{method:'PUT',session,body:{...config,apiKey:'',senderName:'Updated'}})).status,200);
    assert.equal((await mailConfig(pool,env)).apiKey,config.apiKey);
    assert.equal((await request('/admin/contact-settings',{session})).body.mailConfigured,true);
    assert.equal((await request('/admin/mail-settings',{method:'PUT',session,body:{...config,apiKey:'',clearApiKey:true}})).status,200);
    assert.equal((await mailConfig(pool,{...env,BREVO_API_KEY:'environment-key'})).apiKey,'');
    assert.equal((await request('/admin/contact-settings',{session})).body.mailConfigured,false);
  });
  await t.test('contact submissions persist and email settings control notifications', async () => {
    assert.equal((await request('/admin/submissions')).status,401);
    assert.equal((await request('/admin/contact-settings')).status,401);
    const session = await login('admin');
    const lead = { fullName:'Contact Test', phone:'+92 123456', businessEmail:'lead@test.invalid', services:['Web Development'], projectDescription:'Build our website.' };
    assert.equal((await request('/contact/submissions',{method:'POST',body:{...lead,businessEmail:'invalid'}})).status,400);
    assert.equal((await request('/admin/contact-settings',{method:'PUT',session,body:{notificationEmail:'team@test.invalid',sendCustomerEmail:false}})).status,200);
    assert.equal((await request('/contact/submissions',{method:'POST',body:lead})).status,201);
    assert.equal(emails.length,1); assert.equal(emails[0].to[0].email,'team@test.invalid');
    assert.equal(emails[0].replyTo.email,lead.businessEmail);
    const saved = (await request('/admin/submissions',{session})).body;
    assert.equal(saved.total,1); assert.equal(saved.submissions[0].message,lead.projectDescription);
    assert.equal(saved.submissions[0].customer_email_status,'disabled');
    assert.equal((await request(`/admin/submissions/${saved.submissions[0].id}`,{method:'PATCH',session,body:{status:'reviewed'}})).status,200);
    const reviewed = (await request('/admin/submissions?status=reviewed',{session})).body;
    assert.equal(reviewed.total,1); assert.equal(reviewed.counts.reviewed,1); assert.equal(reviewed.submissions[0].status,'reviewed');
    const fresh = (await request('/admin/submissions?status=new',{session})).body;
    assert.equal(fresh.total,0); assert.equal(fresh.submissions.length,0);
    assert.equal((await request('/admin/submissions?status=invalid',{session})).status,400);
    assert.equal((await request('/admin/contact-settings',{method:'PUT',session,body:{notificationEmail:'team@test.invalid',sendCustomerEmail:true}})).status,200);
    assert.equal((await request('/contact/submissions',{method:'POST',body:lead})).status,201);
    assert.equal(emails.length,3); assert.equal(emails[2].to[0].email,lead.businessEmail);
    failMail = true;
    assert.equal((await request('/contact/submissions',{method:'POST',body:lead})).status,201);
    assert.equal((await request('/admin/submissions',{session})).body.submissions[0].notification_status,'failed');
    failMail = false;
    for (let i=0;i<2;i++) assert.equal((await request('/contact/submissions',{method:'POST',body:lead})).status,201);
    assert.equal((await request('/contact/submissions',{method:'POST',body:lead})).status,429);
  });
  await t.test('authentication and CSRF are enforced',async()=>{
    assert.equal((await request('/admin/posts')).status,401);
    assert.equal((await request('/auth/login',{method:'POST',body:{username:'admin',password:'incorrect'}})).status,401);
    const good=await request('/auth/login',{method:'POST',body:{username:'admin',password}});assert.equal(good.status,200);assert.match(good.cookie,/HttpOnly/);assert.equal('password_hash' in good.body.user,false);
    const session={cookie:good.cookie.split(';')[0],csrfToken:good.body.csrfToken};
    assert.equal((await request('/admin/posts',{method:'POST',body:{},session,headers:{'X-CSRF-Token':''}})).status,403);
    assert.equal((await request('/auth/login',{method:'POST',body:{username:'admin',password},headers:{Origin:'https://evil.invalid'}})).status,403);
    assert.equal((await request('/auth/session',{session:{...session,cookie:session.cookie+'tampered'}})).status,401);
  });
  const admin = await login('admin');
  const body = {title:'Database integration article',slug:'database-integration-article',summary:'A test excerpt',category:'Engineering',author:'Test Admin',image:'',content:'A real post body.',status:'draft',blocks:[{id:'text',type:'paragraph',text:'A real post body.'}]};
  let created, published;
  await t.test('drafts, publication, JSONB and concurrency protection',async()=>{
    created=await request('/admin/posts',{method:'POST',body,session:admin});assert.equal(created.status,201);assert.equal(created.body.version,1);
    assert.equal((await request('/posts')).body.length,0);
    const metadata=(await pool.query("SELECT jsonb_typeof(data) AS kind,data FROM postmeta WHERE post_id=$1",[created.body.id])).rows[0];assert.equal(metadata.kind,'object');assert.equal(metadata.data.blocks[0].text,body.content);
    published=await request(`/admin/posts/${created.body.id}`,{method:'PUT',body:{...body,status:'published',version:1},session:admin});assert.equal(published.status,200);assert.equal(published.body.version,2);
    assert.equal((await request(`/posts/${body.slug}`)).status,200);
    assert.equal((await request(`/admin/posts/${created.body.id}`,{method:'PUT',body:{...body,version:1},session:admin})).status,409);
  });
  let viewerId,editorId;
  await t.test('user details and role permissions live in the database',async()=>{
    const viewer=await request('/admin/users',{method:'POST',body:{username:'viewer',name:'Test Viewer',email:'viewer@test.invalid',password,userType:'viewer',isActive:true},session:admin});assert.equal(viewer.status,201);viewerId=viewer.body.id;
    const editor=await request('/admin/users',{method:'POST',body:{username:'editor',name:'Test Editor',email:'editor@test.invalid',password,userType:'editor',isActive:true},session:admin});assert.equal(editor.status,201);editorId=editor.body.id;
    const stored=(await pool.query('SELECT password_hash,user_type FROM users WHERE id=$1',[viewerId])).rows[0];assert.notEqual(stored.password_hash,password);assert.match(stored.password_hash,/^scrypt\$/);assert.equal(stored.user_type,'viewer');
    const viewerSession=await login('viewer');assert.equal((await request('/admin/posts',{session:viewerSession})).status,200);assert.equal((await request('/admin/posts',{method:'POST',body,session:viewerSession})).status,403);assert.equal((await request('/admin/users',{session:viewerSession})).status,403);
    assert.equal((await request('/admin/submissions',{session:viewerSession})).status,403);assert.equal((await request('/admin/mail-settings',{session:viewerSession})).status,403);const overview=(await request('/admin/dashboard',{session:viewerSession})).body;assert.ok(overview.posts);assert.equal('users' in overview,false);assert.equal('submissions' in overview,false);assert.equal('email' in overview,false);
    const editorSession=await login('editor');assert.equal((await request('/admin/contact-settings',{session:editorSession})).status,403);assert.equal((await request('/admin/users',{session:editorSession})).status,403);
    assert.equal((await request('/admin/posts',{method:'POST',body:{...body,slug:'editor-article'},session:editorSession})).status,201);
    await request(`/admin/users/${editorId}`,{method:'PATCH',body:{username:'editor',name:'Test Editor',email:'editor@test.invalid',userType:'viewer',isActive:true},session:admin});
    assert.equal((await request('/admin/posts',{session:editorSession})).status,401);
    assert.equal((await request(`/admin/users/${adminId}`,{method:'PATCH',body:{username:'admin',name:'Test Admin',email:'admin@test.invalid',userType:'viewer',isActive:true},session:admin})).status,400);
  });
  await t.test('trash, restore and permanent deletion cascade to postmeta',async()=>{
    assert.equal((await request('/admin/posts/bulk',{method:'POST',body:{ids:[created.body.id],action:'delete'},session:admin})).status,400);
    assert.equal((await request('/admin/posts/bulk',{method:'POST',body:{ids:[created.body.id],action:'trash'},session:admin})).status,200);
    assert.equal((await request(`/posts/${body.slug}`)).status,404);
    await request('/admin/posts/bulk',{method:'POST',body:{ids:[created.body.id],action:'restore'},session:admin});
    assert.equal((await pool.query('SELECT status FROM posts WHERE id=$1',[created.body.id])).rows[0].status,'draft');
    await request('/admin/posts/bulk',{method:'POST',body:{ids:[created.body.id],action:'trash'},session:admin});
    await request('/admin/posts/bulk',{method:'POST',body:{ids:[created.body.id],action:'delete'},session:admin});
    assert.equal((await pool.query('SELECT count(*)::int AS total FROM postmeta WHERE post_id=$1',[created.body.id])).rows[0].total,0);
  });
  await t.test('logout revokes the session; failed logins are rate limited',async()=>{
    assert.equal((await request('/auth/logout',{method:'POST',body:{},session:admin})).status,200);assert.equal((await request('/admin/posts',{session:admin})).status,401);
    for(let index=0;index<8;index++)assert.equal((await request('/auth/login',{method:'POST',body:{username:'missing-user',password:'wrong'}})).status,401);
    assert.equal((await request('/auth/login',{method:'POST',body:{username:'missing-user',password:'wrong'}})).status,429);
  });
});
