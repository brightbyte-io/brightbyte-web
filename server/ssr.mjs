import { postSelect, publicPost } from './posts.mjs';
import { renderPageHead } from './pageHtml.mjs';

export async function renderDocument(template, pathname, pool, render, staticPage) {
  const blogs = { posts: [], loading: false, error: '' };
  if (/^\/(blog|blogs|blog-post)(\/|$)/i.test(pathname)) {
    try {
      const result = await pool.query(`${postSelect} WHERE p.status='published' AND p.post_type='post' ORDER BY p.published_at DESC,p.id`);
      blogs.posts = result.rows.map(publicPost);
    } catch {
      blogs.error = 'Articles could not be loaded.';
    }
  }
  const admin = /^\/admin(?:\/|$)/i.test(pathname);
  const body = staticPage ? staticPage.body : admin ? '' : render(pathname, blogs);
  const data = JSON.stringify({ pathname: staticPage?.pathname || pathname, blogs }).replaceAll('<', '\\u003c');
  const html = await renderPageHead(template, pathname, pool);
  return html.replace('<div id="root"></div>', () => `<div id="root">${body}</div>`)
    .replace('</body>', () => `<script id="ssr-data" type="application/json">${data}</script>\n</body>`);
}
