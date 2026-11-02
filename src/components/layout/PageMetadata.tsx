import { useEffect } from 'react';
import metadata from '../../data/pageMetadata.json';
import { PageId } from '../../types';
import { apiRequest } from '../../utils/adminApi';

interface Metadata { title: string; description: string; robots?: string; }
function meta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) { element = document.createElement('meta'); element.setAttribute(attribute, key); document.head.appendChild(element); }
  element.content = content;
}
function apply(value: Metadata, article = false) {
  document.title = value.title;
  meta('name', 'description', value.description);
  meta('name', 'robots', value.robots || 'index, follow');
  meta('property', 'og:title', value.title);
  meta('property', 'og:description', value.description);
  meta('property', 'og:type', article ? 'article' : 'website');
  meta('name', 'twitter:title', value.title);
  meta('name', 'twitter:description', value.description);
}
export function PageMetadata({ page, detailId }: { page: PageId; detailId?: string }) {
  useEffect(() => {
    let cancelled = false;
    const pages = metadata.pages as Record<string, Metadata>;
    let value = pages[page] || metadata.defaults;
    if (page === 'service-detail' && detailId) {
      const services = metadata.services as Record<string, Metadata>;
      const key = services[detailId] ? detailId : Object.keys(services).find(id => detailId.includes(id));
      value = key ? services[key] : value;
    }
    const overrides = metadata.blog.overrides as Record<string, Metadata>;
    if (page === 'blog-post' && detailId && overrides[detailId]) value = overrides[detailId];
    apply(value, page === 'blog-post');
    if (page === 'blog-post' && detailId && !overrides[detailId]) {
      apiRequest<{ title: string; summary: string }>(`/posts/${encodeURIComponent(detailId)}`).then(post => {
        if (!cancelled) apply({ title: metadata.blog.titleTemplate.replace('{title}', post.title), description: post.summary || metadata.blog.descriptionFallback }, true);
      }).catch(() => { /* Keep the route fallback while the article is unavailable. */ });
    }
    return () => { cancelled = true; };
  }, [page, detailId]);
  return null;
}
