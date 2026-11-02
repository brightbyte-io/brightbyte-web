export class ApiError extends Error { constructor(message, status = 400) { super(message); this.status = status; } }
export const postSelect = 'SELECT p.*, m.data FROM posts p JOIN postmeta m ON m.post_id=p.id';
export function publicPost(row) {
  return { ...row.data, id: row.id, slug: row.slug, title: row.title, status: row.status, version: row.version, updatedAt: row.updated_at.toISOString(), createdAt: row.created_at.toISOString() };
}
const safeImage = value => !value || (/^(https:\/\/|\/(?!\/))/.test(value) && !/[\s\\]/.test(value)) || /^data:image\/(?:png|jpeg|webp|gif);base64,[A-Za-z0-9+/]+={0,2}$/.test(value);
export function validatePost(body) {
  if (!body || !['title','slug','summary','category','author','image','content'].every(key => typeof body[key] === 'string')) throw new ApiError('Invalid post fields.');
  if (!body.title.trim() || body.title.length > 180 || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(body.slug) || body.slug.length > 180 || !['draft','published','trash'].includes(body.status)) throw new ApiError('Enter a title, valid URL slug, and post status.');
  if (!safeImage(body.image) || !Array.isArray(body.blocks) || body.blocks.length > 500) throw new ApiError('Invalid image or content blocks.');
  const ids = new Set();
  const blocks = body.blocks.map(block => {
    if (!block || typeof block.id !== 'string' || ids.has(block.id) || typeof block.text !== 'string' || !['paragraph','heading','list','quote','image','divider','accordion'].includes(block.type)) throw new ApiError('Invalid content block.');
    ids.add(block.id);
    const out = { id: block.id, type: block.type, text: block.text };
    if (block.type === 'heading') out.level = block.level === 3 ? 3 : 2;
    if (block.type === 'image') {
      if (typeof block.url !== 'string' || !safeImage(block.url)) throw new ApiError('Invalid block image.');
      Object.assign(out, { url: block.url, alt: String(block.alt || ''), caption: String(block.caption || '') });
    }
    if (block.type === 'accordion') {
      if (!Array.isArray(block.items) || block.items.length > 100) throw new ApiError('Invalid FAQ questions.');
      out.items = block.items.map(item => {
        if (!item || !['id','question','answer'].every(key => typeof item[key] === 'string')) throw new ApiError('Invalid FAQ item.');
        if (body.status === 'published' && (!item.question.trim() || !item.answer.trim())) throw new ApiError('Complete each FAQ question and answer before publishing.');
        return { id: item.id, question: item.question, answer: item.answer };
      });
      if (body.status === 'published' && !out.items.length) throw new ApiError('Add FAQ questions before publishing.');
    }
    return out;
  });
  if (body.status === 'published' && (!body.summary.trim() || !body.author.trim() || !body.category.trim() || !blocks.some(block => block.type === 'image' ? block.url : block.type === 'accordion' ? block.items.length : block.type !== 'divider' && block.text.trim()))) throw new ApiError('Published posts need an excerpt, author, category, and content.');
  return { title: body.title.trim(), slug: body.slug, status: body.status, summary: body.summary, category: body.category, author: body.author, image: body.image, content: body.content, blocks };
}
