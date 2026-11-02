import { createContext, useContext, useEffect, useSyncExternalStore } from 'react';
import { apiRequest } from './adminApi';

export type BlogBlockType = 'paragraph' | 'heading' | 'list' | 'quote' | 'image' | 'divider' | 'accordion';

export interface BlogBlock {
  id: string;
  type: BlogBlockType;
  text: string;
  level?: 2 | 3;
  url?: string;
  alt?: string;
  caption?: string;
  items?: { id: string; question: string; answer: string }[];
}

export interface ManagedBlog {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: string;
  author: string;
  image: string;
  content: string;
  status: 'draft' | 'published' | 'trash';
  blocks?: BlogBlock[];
  updatedAt: string;
  version?: number;
}

export interface BlogSnapshot { posts: ManagedBlog[]; loading: boolean; error: string }
export const initialBlogSnapshot: BlogSnapshot = { posts: [], loading: true, error: '' };
export const BlogSsrContext = createContext<BlogSnapshot>(initialBlogSnapshot);
let snapshot = initialBlogSnapshot;
export function initializeBlogs(value: BlogSnapshot) { snapshot = value; }
const listeners = new Set<() => void>();
let pending: Promise<void> | null = null;
const emit = () => listeners.forEach(listener => listener());
export function refreshPublishedBlogs(): Promise<void> {
  if (pending) return pending;
  pending = (async () => {
    try { snapshot = { posts: await apiRequest<ManagedBlog[]>('/posts'), loading: false, error: '' }; }
    catch (error) { snapshot = { posts: [], loading: false, error: error instanceof Error ? error.message : 'Articles could not be loaded.' }; }
    finally { pending = null; emit(); }
  })();
  return pending;
}
export function usePublicBlogs() {
  const serverSnapshot = useContext(BlogSsrContext);
  const state = useSyncExternalStore(callback => { listeners.add(callback); return () => { listeners.delete(callback); }; }, () => snapshot, () => serverSnapshot);
  useEffect(() => {
    void refreshPublishedBlogs();
    const refresh = () => { if (document.visibilityState === 'visible') void refreshPublishedBlogs(); };
    window.addEventListener('focus', refresh);
    const interval = window.setInterval(refresh, 60000);
    return () => { window.removeEventListener('focus', refresh); window.clearInterval(interval); };
  }, []);
  return state;
}

export function asPublicPost(post: ManagedBlog) {
  return {
    ...post,
    readTime: `${Math.max(1, Math.ceil(post.content.split(/\s+/).length / 200))} Min Read`,
    date: post.updatedAt.slice(0, 10),
    content: post.content.split(/\n\s*\n/).filter(Boolean),
  };
}

export function postBlocks(post: ManagedBlog): BlogBlock[] {
  return post.blocks ?? post.content.split(/\n\s*\n/).filter(Boolean).map((text, index) => ({
    id: `${post.id}-paragraph-${index}`, type: 'paragraph', text,
  }));
}

export function blocksText(blocks: BlogBlock[]): string {
  return blocks.map(block => block.type === 'image' ? block.caption || '' : block.type === 'accordion'
    ? [block.text, ...(block.items || []).flatMap(item => [item.question, item.answer])].filter(Boolean).join('\n\n')
    : block.text).filter(Boolean).join('\n\n');
}

export function safeImageUrl(value: string): boolean {
  return (/^(https:\/\/|\/(?!\/))/.test(value) && !/[\s\\]/.test(value))
    || /^data:image\/(?:png|jpeg|webp|gif);base64,[A-Za-z0-9+/]+={0,2}$/.test(value);
}

