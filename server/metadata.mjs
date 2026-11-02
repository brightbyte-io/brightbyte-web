import { ApiError } from './posts.mjs';

export function registerMetadata(app, { pool, authenticate, admin }) {
  app.get('/metadata', async (req, res) => {
    const { rows } = await pool.query('SELECT key,title,description FROM page_metadata ORDER BY key');
    const data = { defaults: { title: 'BrightByte Consulting', description: '' }, pages: {}, services: {}, blog: { titleTemplate: '{title} | BrightByte Blog', descriptionFallback: '', overrides: {} } };
    for (const { key, title, description } of rows) {
      const value = { title, description };
      if (key === 'defaults') data.defaults = value;
      else if (key === 'blog-template') Object.assign(data.blog, { titleTemplate: title, descriptionFallback: description });
      else if (key.startsWith('page:')) data.pages[key.slice(5)] = value;
      else if (key.startsWith('service:')) data.services[key.slice(8)] = value;
      else if (key.startsWith('blog:')) data.blog.overrides[key.slice(5)] = value;
    }
    res.json(data);
  });
  app.get('/admin/metadata', authenticate, admin, async (req, res) => {
    const { rows } = await pool.query('SELECT key,title,description FROM page_metadata ORDER BY key');
    const { rows: posts } = await pool.query('SELECT slug,title FROM posts ORDER BY title');
    for (const post of posts) if (!rows.some(row => row.key === `blog:${post.slug}`)) rows.push({ key: `blog:${post.slug}`, title: '', description: '' });
    res.json(rows);
  });
  app.put('/admin/metadata', authenticate, admin, async (req, res) => {
    const { key, title, description } = req.body || {};
    if (typeof key !== 'string' || !/^(defaults|blog-template|(?:page|service|blog):[a-zA-Z0-9_-]+)$/.test(key) || key.length > 250 || typeof title !== 'string' || typeof description !== 'string' || title.length > 300 || description.length > 1000) throw new ApiError('Enter a valid title (up to 300 characters) and description (up to 1,000 characters).');
    if (key.startsWith('blog:') && !title.trim() && !description.trim()) {
      await pool.query('DELETE FROM page_metadata WHERE key=$1', [key]);
      return res.json({ key, title: '', description: '' });
    }
    if (!title.trim() || !description.trim() || (key === 'blog-template' && !title.includes('{title}'))) throw new ApiError('Enter both fields. The article title template must include {title}.');
    const { rows } = await pool.query('INSERT INTO page_metadata(key,title,description) VALUES($1,$2,$3) ON CONFLICT(key) DO UPDATE SET title=excluded.title,description=excluded.description,updated_at=now() RETURNING key,title,description', [key,title.trim(),description.trim()]);
    res.json(rows[0]);
  });
}
