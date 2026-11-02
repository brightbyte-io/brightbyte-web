import { readFile } from 'node:fs/promises';
const defaults = JSON.parse(await readFile(new URL('../src/data/pageMetadata.json', import.meta.url), 'utf8'));

export async function loadMetadata(pool) {
  const data = structuredClone(defaults);
  const { rows } = await pool.query('SELECT key,title,description FROM page_metadata ORDER BY key');
  for (const { key, title, description } of rows) {
    const value = { title, description };
    if (key === 'defaults') data.defaults = value;
    else if (key === 'blog-template') Object.assign(data.blog, { titleTemplate: title, descriptionFallback: description });
    else if (key.startsWith('page:')) data.pages[key.slice(5)] = value;
    else if (key.startsWith('service:')) data.services[key.slice(8)] = value;
    else if (key.startsWith('blog:')) data.blog.overrides[key.slice(5)] = value;
  }
  return data;
}

export async function renderPageHead(html, pathname, pool) {
  const segments = pathname.split('/').filter(Boolean).map(decodeURIComponent);
  const aliases = { service: 'services', 'service-detail': 'services', blogs: 'blog', 'blog-post': 'blog', howwework: 'how-we-work', process: 'how-we-work', 'contact-us': 'contact', terms: 'terms-of-service' };
  const first = segments[0] || 'home';
  let page = aliases[first] || first;
  const detailId = segments[1] || (first === 'service-detail' ? 'mobile-app' : first === 'blog-post' ? '1' : undefined);
  if (detailId && page === 'services') page = 'service-detail';
  if (detailId && page === 'blog') page = 'blog-post';
  let data;
  try { data = await loadMetadata(pool); }
  catch { data = defaults; }
  let value = data.pages[page] || data.pages.home || data.defaults;
  if (page === 'service-detail') {
    const key = data.services[detailId] ? detailId : Object.keys(data.services).find(id => detailId.includes(id));
    if (key) value = data.services[key];
  }
  if (page === 'blog-post') {
    if (data.blog.overrides[detailId]) value = data.blog.overrides[detailId];
    else {
      try {
        const { rows: [post] } = await pool.query("SELECT p.title,m.data->>'summary' AS summary FROM posts p JOIN postmeta m ON m.post_id=p.id WHERE p.status='published' AND (p.slug=$1 OR p.id=$1) LIMIT 1", [detailId]);
        if (post) value = { title: data.blog.titleTemplate.replace('{title}', post.title), description: post.summary || data.blog.descriptionFallback };
      } catch { /* Keep the route metadata when the database is unavailable. */ }
    }
  }
  const escape = text => String(text).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
  const tags = [
    ['name', 'description', value.description],
    ['name', 'robots', page === 'admin' ? 'noindex, nofollow' : value.robots || 'index, follow'],
    ['property', 'og:title', value.title],
    ['property', 'og:description', value.description],
    ['property', 'og:type', page === 'blog-post' ? 'article' : 'website'],
    ['name', 'twitter:title', value.title],
    ['name', 'twitter:description', value.description],
  ];
  html = html.replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, '');
  for (const [attribute, key] of tags) {
    html = html.replace(new RegExp(`<meta\\b(?=[^>]*\\b${attribute}=["']${key}["'])[^>]*>`, 'gi'), '');
  }
  return html.replace('</head>', `<title>${escape(value.title)}</title>\n${tags.map(([attribute, key, content]) => `<meta ${attribute}="${key}" content="${escape(content)}" />`).join('\n')}\n</head>`);
}
