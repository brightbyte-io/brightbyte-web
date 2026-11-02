import './config.mjs';
import { readFile } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import ts from 'typescript';
import { createPool, transaction } from './db.mjs';
import { hashPassword } from './auth.mjs';

const pool = createPool(process.env);
try {
  const schema = await readFile(new URL('./schema.sql', import.meta.url), 'utf8');
  if (!process.env.ADMIN_USERNAME || !process.env.ADMIN_PASSWORD || process.env.ADMIN_PASSWORD.length < 12 || !process.env.ADMIN_EMAIL) throw new Error('Configure ADMIN_USERNAME, ADMIN_EMAIL and ADMIN_PASSWORD (12+ characters).');
  const passwordHash = await hashPassword(process.env.ADMIN_PASSWORD);
  const source = await readFile(new URL('../src/data/mockData.ts', import.meta.url), 'utf8');
  const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 } }).outputText;
  const { blogPosts } = await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`);
  const overrides = JSON.parse(await readFile(new URL('../src/data/blogContent.json', import.meta.url), 'utf8'));
  const seeds = [...overrides, ...blogPosts.filter(post => !overrides.some(saved => saved.id === post.id))].filter(post => post.status !== 'deleted');
  const result = await transaction(pool, async client => {
    await client.query('SELECT pg_advisory_xact_lock(815002)');
    const initialInstall = !(await client.query("SELECT to_regclass('public.posts') AS existing")).rows[0].existing;
    await client.query(schema);
    const metadata = JSON.parse(await readFile(new URL('../src/data/pageMetadata.json', import.meta.url), 'utf8'));
    const entries = [['defaults', metadata.defaults], ['blog-template', { title: metadata.blog.titleTemplate, description: metadata.blog.descriptionFallback }], ...Object.entries(metadata.pages).map(([key,value]) => ['page:'+key,value]), ...Object.entries(metadata.services).map(([key,value]) => ['service:'+key,value]), ...Object.entries(metadata.blog.overrides).map(([key,value]) => ['blog:'+key,value])];
    for (const [key, value] of entries) await client.query('INSERT INTO page_metadata(key,title,description) VALUES($1,$2,$3) ON CONFLICT DO NOTHING', [key,value.title,value.description]);
    await client.query('INSERT INTO users(id,username,email,name,password_hash,user_type) VALUES($1,$2,$3,$4,$5,$6) ON CONFLICT (lower(username)) DO NOTHING', [randomUUID(), process.env.ADMIN_USERNAME, process.env.ADMIN_EMAIL, process.env.ADMIN_NAME || 'BrightByte Admin', passwordHash, 'admin']);
    const { rows: [admin] } = await client.query('SELECT id FROM users WHERE lower(username)=lower($1)', [process.env.ADMIN_USERNAME]);
    let added = 0;
    for (const post of initialInstall ? seeds : []) {
      const content = Array.isArray(post.content) ? post.content.join('\n\n') : post.content || post.summary || '';
      const data = { ...post, content, slug: post.slug || post.id, status: post.status || 'published', author: typeof post.author === 'string' ? post.author : post.author?.name || 'BrightByte Team', image: post.image || '', blocks: post.blocks || content.split(/\n\s*\n/).filter(Boolean).map((text, i) => ({ id: `${post.id}-${i}`, type: 'paragraph', text })) };
      const insert = await client.query('INSERT INTO posts(id,slug,title,status,author_id,published_at) VALUES($1,$2,$3,$4,$5,CASE WHEN $4=\'published\' THEN now() ELSE NULL END) ON CONFLICT DO NOTHING RETURNING id', [data.id, data.slug, data.title, data.status, admin.id]);
      if (insert.rowCount) { await client.query('INSERT INTO postmeta(post_id,data) VALUES($1,$2::jsonb)', [data.id, JSON.stringify(data)]); added++; }
    }
    return added;
  });
  console.log(`Database migration complete: users, posts, postmeta ready; ${result} posts seeded. Existing records/passwords were preserved.`);
} catch (error) {
  console.error('Migration failed:', error.code || error.message.replace(/postgres(?:ql)?:\/\/\S+/g, '[database URL hidden]')); process.exitCode = 1;
} finally { await pool.end(); }
