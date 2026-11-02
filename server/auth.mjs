import { randomBytes, scrypt as rawScrypt, timingSafeEqual, createHmac } from 'node:crypto';
import { promisify } from 'node:util';
const scrypt = promisify(rawScrypt);
export async function hashPassword(password) {
  const salt = randomBytes(16).toString('hex');
  const key = await scrypt(password, salt, 64);
  return `scrypt$${salt}$${key.toString('hex')}`;
}
export async function verifyPassword(password, stored) {
  const [scheme, salt, hex] = String(stored || '').split('$');
  const valid = scheme === 'scrypt' && /^[a-f0-9]{32}$/.test(salt || '') && /^[a-f0-9]{128}$/.test(hex || '');
  const key = await scrypt(password, valid ? salt : '00000000000000000000000000000000', 64);
  return valid && timingSafeEqual(key, Buffer.from(hex, 'hex'));
}
export function signSession(user, secret) {
  const payload = { uid: user.id, ver: user.session_version, exp: Math.floor(Date.now() / 1000) + 8 * 3600, csrf: randomBytes(24).toString('hex') };
  const data = Buffer.from(JSON.stringify(payload)).toString('base64url');
  return { token: `${data}.${createHmac('sha256', secret).update(data).digest('base64url')}`, csrf: payload.csrf };
}
export function readSession(token, secret) {
  try {
    const [data, signature, extra] = String(token || '').split('.');
    if (extra || !data || !signature) return null;
    const actual = Buffer.from(signature, 'base64url');
    const expected = createHmac('sha256', secret).update(data).digest();
    if (actual.length !== expected.length || !timingSafeEqual(actual, expected)) return null;
    const payload = JSON.parse(Buffer.from(data, 'base64url').toString());
    return payload.exp > Date.now() / 1000 && payload.uid && payload.csrf ? payload : null;
  } catch { return null; }
}
export function publicUser(row) { return { id: row.id, username: row.username, email: row.email, name: row.name, userType: row.user_type, isActive: row.is_active }; }
