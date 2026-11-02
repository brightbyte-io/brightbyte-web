import pg from 'pg';
export function createPool(env) {
  if (!env.DATABASE_URL) throw new Error('DATABASE_URL is required on the API server.');
  const url = new URL(env.DATABASE_URL);
  if (url.searchParams.has('sslmode')) url.searchParams.set('sslmode', 'verify-full');
  const pool = new pg.Pool({ connectionString: url.toString(), enableChannelBinding: true, max: 5, connectionTimeoutMillis: 15000, idleTimeoutMillis: 10000 });
  pool.on('error', () => console.error('An idle database connection failed.'));
  return pool;
}
export async function transaction(pool, action) {
  const client = await pool.connect();
  try { await client.query('BEGIN'); const result = await action(client); await client.query('COMMIT'); return result; }
  catch (error) { await client.query('ROLLBACK'); throw error; }
  finally { client.release(); }
}
