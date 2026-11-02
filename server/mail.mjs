import { createCipheriv, createDecipheriv, hkdfSync, randomBytes } from 'node:crypto';
import { ApiError } from './posts.mjs';

export const validEmail = value => typeof value === 'string' && value.length <= 254 && /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(value);
const key = env => hkdfSync('sha256', env.MAIL_ENCRYPTION_KEY || env.SESSION_SECRET, 'brightbyte', 'mail-settings-v1', 32);
const encrypt = (value, env) => {
  const iv = randomBytes(12), cipher = createCipheriv('aes-256-gcm', key(env), iv);
  const data = Buffer.concat([cipher.update(value,'utf8'),cipher.final()]);
  return [iv,cipher.getAuthTag(),data].map(part => part.toString('base64')).join('.');
};
const decrypt = (value, env) => {
  const [iv,tag,data] = value.split('.').map(part => Buffer.from(part,'base64'));
  const cipher = createDecipheriv('aes-256-gcm',key(env),iv); cipher.setAuthTag(tag);
  return Buffer.concat([cipher.update(data),cipher.final()]).toString('utf8');
};
export async function mailConfig(pool, env) {
  const row = (await pool.query('SELECT * FROM mail_settings WHERE id=true')).rows[0];
  if (row) return { apiKey: row.api_key_encrypted ? decrypt(row.api_key_encrypted,env) : '', senderEmail: row.sender_email, senderName: row.sender_name };
  return { apiKey: env.BREVO_API_KEY || '', senderEmail: env.BREVO_SENDER_EMAIL || '', senderName: env.BREVO_SENDER_NAME || 'BrightByte' };
}
export async function sendEmail(pool, env, payload) {
  const config = await mailConfig(pool,env);
  if (!config.apiKey || !validEmail(config.senderEmail)) return 'not configured';
  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST', signal: AbortSignal.timeout(12000),
    headers: { 'Content-Type': 'application/json', 'api-key': config.apiKey },
    body: JSON.stringify({ ...payload, sender: { email: config.senderEmail, name: config.senderName } }),
  });
  return response.ok ? 'accepted by Brevo' : 'failed';
}
export function registerMailSettings(app, { pool, env, authenticate, admin }) {
  app.get('/admin/mail-settings',authenticate,admin,async (req,res) => {
    const config = await mailConfig(pool,env);
    res.json({ senderEmail: config.senderEmail, senderName: config.senderName, apiKeyConfigured: Boolean(config.apiKey) });
  });
  app.put('/admin/mail-settings',authenticate,admin,async (req,res) => {
    const { senderEmail, senderName, apiKey, clearApiKey } = req.body || {};
    if (typeof senderEmail !== 'string' || (senderEmail.trim() && !validEmail(senderEmail.trim())) || typeof senderName !== 'string' || !senderName.trim() || senderName.length > 100 || typeof apiKey !== 'string' || apiKey.length > 1024 || /\s/.test(apiKey) || typeof clearApiKey !== 'boolean' || (clearApiKey && apiKey)) throw new ApiError('Enter valid sender details and an API key without spaces.');
    const current = await mailConfig(pool,env);
    const secret = clearApiKey ? '' : apiKey || current.apiKey;
    await pool.query('INSERT INTO mail_settings(id,sender_email,sender_name,api_key_encrypted) VALUES(true,$1,$2,$3) ON CONFLICT(id) DO UPDATE SET sender_email=$1,sender_name=$2,api_key_encrypted=$3,updated_at=now()', [senderEmail.trim(),senderName.trim(),secret ? encrypt(secret,env) : '']);
    res.json({ ok: true });
  });
}
