import { test } from 'node:test';
import assert from 'node:assert/strict';
import { renderPageHead } from './pageHtml.mjs';
const html = '<html><head><title>Home</title><meta name="description" content="Home" /><meta property="og:type" content="website" /></head><body><div id="root"></div></body></html>';
const pool = { query: async () => ({ rows: [] }) };
test('initial HTML has route metadata, aliases and admin robots', async () => {
  for (const route of ['/about', '/services/mobile-app', '/contact-us', '/privacy-policy']) {
    const result = await renderPageHead(html, route, pool);
    assert.doesNotMatch(result, /<title>Home<\/title>/);
    assert.equal((result.match(/name="description"/g) || []).length, 1);
  }
  assert.match(await renderPageHead(html, '/services/mobile-app', pool), /<title>Mobile App Development/);
  assert.match(await renderPageHead(html, '/admin', pool), /content="noindex, nofollow"/);
});
test('saved metadata is escaped in the raw HTML', async () => {
  const db = { query: async () => ({ rows: [{ key: 'page:about', title: 'A & <B>', description: '"quoted" <script>' }] }) };
  const result = await renderPageHead(html, '/about', db);
  assert.match(result, /<title>A &amp; &lt;B&gt;<\/title>/);
  assert.match(result, /&quot;quoted&quot; &lt;script&gt;/);
});
test('published articles supply titles and descriptions, overrides win', async () => {
  const db = { query: async sql => ({ rows: sql.includes('page_metadata') ? [] : [{ title: 'Article title', summary: 'Article summary' }] }) };
  const result = await renderPageHead(html, '/blog/example', db);
  assert.match(result, /<title>Article title \| BrightByte Blog<\/title>/);
  assert.match(result, /content="Article summary"/);
  assert.match(result, /content="article"/);
  const override = { query: async () => ({ rows: [{ key: 'blog:example', title: 'Override', description: 'Saved description' }] }) };
  assert.match(await renderPageHead(html, '/blog/example', override), /<title>Override<\/title>/);
});
test('database failure keeps route-specific defaults', async () => {
  assert.match(await renderPageHead(html, '/about', { query: async () => { throw new Error('offline'); } }), /<title>About Us/);
});
