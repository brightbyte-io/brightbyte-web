import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { render, staticPath, staticPaths } from '../dist/server/entry-server.js';
import { renderDocument } from './ssr.mjs';
const template = await readFile(new URL('../dist/server/template.html', import.meta.url), 'utf8');
const pool = { query: async () => ({ rows: [] }) };
const staticBodies = JSON.parse(await readFile(new URL('../dist/server/static-pages.json', import.meta.url), 'utf8'));
test('S3 HTML files contain static bodies without a running server', async () => {
  for (const pathname of staticPaths) {
    const filename = pathname === '/' ? 'index.html' : `${pathname.slice(1)}/index.html`;
    const html = await readFile(new URL(`../dist/${filename}`, import.meta.url), 'utf8');
    assert.match(html, /<h1\b/);
    assert.ok(html.includes(staticBodies[pathname]));
    assert.equal((html.match(/id="ssr-data"/g) || []).length, 1);
    assert.match(html, /\/assets\/index-/);
  }
  const shell = await readFile(new URL('../dist/404.html', import.meta.url), 'utf8');
  assert.match(shell, /<div id="root"><\/div>/);
});
test('static pages reuse build output while database metadata stays current', async () => {
  const neverRender = () => { throw new Error('Static page rendered at request time'); };
  for (const pathname of staticPaths) {
    const html = await renderDocument(template, pathname, pool, neverRender, { pathname, body: staticBodies[pathname] });
    assert.match(html, /<h1\b/);
  }
  const staticPage = { pathname: '/', body: staticBodies['/'] };
  const db = { query: async () => ({ rows: [{ key: 'page:home', title: 'New database title', description: 'Updated description' }] }) };
  const html = await renderDocument(template, '/', db, neverRender, staticPage);
  assert.match(html, /<title>New database title<\/title>/);
  assert.ok(html.includes(staticPage.body));
  assert.equal(staticPath('/contact-us'), '/contact');
  assert.equal(staticPath('/service/mobile-app-development'), '/services/mobile-app');
  assert.equal(staticPath('/blog/example'), null);
});
test('admin stays client rendered', async () => {
  const html = await renderDocument(template, '/admin', pool, () => { throw new Error('Admin rendered on server'); });
  assert.match(html, /<div id="root"><\/div>/);
  assert.match(html, /noindex, nofollow/);
});
test('public routes return rendered page bodies and matching hydration paths', async () => {
  for (const path of ['/', '/about', '/services', '/services/mobile-app', '/how-we-work', '/contact', '/blog', '/privacy-policy', '/terms-of-service']) {
    const html = await renderDocument(template, path, pool, render);
    assert.match(html, /<div id="root"><(?:link|div)/);
    assert.match(html, /<h1\b/);
    const data = JSON.parse(html.match(/<script id="ssr-data" type="application\/json">([\s\S]*?)<\/script>/)[1]);
    assert.equal(data.pathname, path);
    assert.equal(data.blogs.loading, false);
  }
});
test('published article text is rendered and bootstrap data cannot close its script', async () => {
  const marker = '</script><script>alert(1)</script>';
  const post = { id: 'test-post', slug: 'ssr-test', title: 'SSR article title', status: 'published', updated_at: new Date('2026-01-01'), created_at: new Date('2026-01-01'), data: { summary: 'Article summary', content: 'Article body visible in source', category: 'Engineering', author: 'Team', image: '', blocks: [{ id: 'paragraph', type: 'paragraph', text: 'Article body visible in source' }], extra: marker } };
  const db = { query: async sql => ({ rows: sql.includes('p.*') ? [post] : [] }) };
  const html = await renderDocument(template, '/blog/ssr-test', db, render);
  assert.match(html, /Article body visible in source/);
  assert.match(html, /SSR article title/);
  assert.ok(!html.includes(marker));
  const data = JSON.parse(html.match(/<script id="ssr-data" type="application\/json">([\s\S]*?)<\/script>/)[1]);
  assert.equal(data.blogs.posts[0].extra, marker);
});
test('concurrent article requests keep their data isolated', async () => {
  const [a, b] = await Promise.all([
    renderDocument(template, '/blog', { query: async () => { throw new Error('offline'); } }, render),
    renderDocument(template, '/blog', pool, render),
  ]);
  assert.match(a, /Articles could not be loaded/);
  assert.doesNotMatch(b, /Articles could not be loaded/);
});
