import { randomUUID } from 'node:crypto';
import { ApiError } from './posts.mjs';

import { validEmail, mailConfig, sendEmail, registerMailSettings } from './mail.mjs';
const services = new Set(['Mobile App Development','Web Development','AI Development','DevOps','SEO / Digital Marketing','ERP System','Business Auditing','Project Management','Staff Augmentation','OEM Global Sourcing']);

export function registerContact(app, { pool, env, authenticate, admin, sendMail }) {
  const rate = new Map();
  registerMailSettings(app, { pool, env, authenticate, admin });
  const send = sendMail || (payload => sendEmail(pool, env, payload));
  app.post('/contact/submissions', async (req, res) => {
    const body = req.body || {};
    if (body.website) throw new ApiError('Unable to submit this request.');
    const clean = (key, max) => {
      if (typeof body[key] !== 'string' || !body[key].trim() || body[key].length > max) throw new ApiError('Enter valid contact details and a project description.');
      return body[key].trim();
    };
    const name = clean('fullName',100), phone = clean('phone',60), email = clean('businessEmail',254), message = clean('projectDescription',10000);
    if (!validEmail(email) || !Array.isArray(body.services) || body.services.length > 10 || body.services.some(service => !services.has(service))) throw new ApiError('Enter a valid email address and services.');
    const now = Date.now();
    for (const [key, entry] of rate) if (entry.until < now) rate.delete(key);
    const key = req.ip; const entry = rate.get(key) || { count: 0, until: now + 3600000 };
    if (entry.count >= 5 || rate.size > 10000) throw new ApiError('Too many submissions. Please try again later.',429);
    entry.count++; rate.set(key,entry);
    const settings = (await pool.query('SELECT * FROM contact_settings WHERE id=true')).rows[0];
    const id = randomUUID();
    await pool.query('INSERT INTO contact_submissions(id,full_name,phone,email,services,message,notification_status,customer_email_status) VALUES($1,$2,$3,$4,$5::jsonb,$6,$7,$8)', [id,name,phone,email,JSON.stringify([...new Set(body.services)]),message,settings?.notification_email ? 'pending' : 'not configured',settings?.send_customer_email ? 'pending' : 'disabled']);
    const attempt = async payload => { try { return await send(payload); } catch { return 'failed'; } };
    const [notification, customer] = await Promise.all([
      settings?.notification_email ? attempt({ to: [{ email: settings.notification_email }], replyTo: { email, name }, subject: 'New contact form submission', textContent: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nServices: ${body.services.join(', ') || 'None selected'}\n\n${message}` }) : 'not configured',
      settings?.send_customer_email ? attempt({ to: [{ email, name }], subject: 'We received your consultation request', textContent: `Hello ${name},\n\nThank you for contacting BrightByte. We have received your request and will respond within one business day.\n\nBrightByte Team` }) : 'disabled',
    ]);
    // Saving the lead succeeds independently of the email provider.
    await pool.query('UPDATE contact_submissions SET notification_status=$2,customer_email_status=$3 WHERE id=$1',[id,notification,customer]);
    res.status(201).json({ ok: true });
  });
  app.get('/admin/submissions', authenticate, admin, async (req,res) => {
    const page = Math.max(1,Math.min(100000,Number(req.query.page) || 1));
    const status = req.query.status || 'all';
    if (!['all','new','reviewed'].includes(status)) throw new ApiError('Choose a valid submission filter.');
    const result = await pool.query("SELECT * FROM contact_submissions WHERE ($1='all' OR status=$1) ORDER BY created_at DESC,id LIMIT 50 OFFSET $2",[status,(page-1)*50]);
    const counts = (await pool.query("SELECT count(*)::int AS all, count(*) FILTER (WHERE status='new')::int AS new, count(*) FILTER (WHERE status='reviewed')::int AS reviewed FROM contact_submissions")).rows[0];
    res.json({ submissions: result.rows, total: counts[status], counts, page });
  });
  app.patch('/admin/submissions/:id', authenticate, admin, async (req,res) => {
    if (!['new','reviewed'].includes(req.body?.status) || !/^[a-f0-9-]{36}$/i.test(req.params.id)) throw new ApiError('Choose a valid submission status.');
    const result = await pool.query('UPDATE contact_submissions SET status=$2 WHERE id=$1 RETURNING id',[req.params.id,req.body.status]);
    if (!result.rowCount) throw new ApiError('Submission not found.',404);
    res.json({ ok: true });
  });
  app.get('/admin/contact-settings', authenticate, admin, async (req,res) => {
    const settings = (await pool.query('SELECT * FROM contact_settings WHERE id=true')).rows[0];
    const config = await mailConfig(pool,env);
    res.json({ notificationEmail: settings?.notification_email || '', sendCustomerEmail: settings?.send_customer_email || false, mailConfigured: Boolean(config.apiKey && validEmail(config.senderEmail)) });
  });
  app.put('/admin/contact-settings', authenticate, admin, async (req,res) => {
    const { notificationEmail, sendCustomerEmail } = req.body || {};
    if (typeof notificationEmail !== 'string' || (notificationEmail.trim() && !validEmail(notificationEmail.trim())) || typeof sendCustomerEmail !== 'boolean') throw new ApiError('Enter a valid notification email and confirmation setting.');
    await pool.query('UPDATE contact_settings SET notification_email=$1,send_customer_email=$2,updated_at=now() WHERE id=true',[notificationEmail.trim(),sendCustomerEmail]);
    res.json({ ok: true });
  });
}
