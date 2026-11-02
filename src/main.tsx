import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BlogSsrContext, initializeBlogs, initialBlogSnapshot, type BlogSnapshot } from './utils/blogContent';

const dataElement = document.getElementById('ssr-data');
const data: { pathname: string; blogs: BlogSnapshot } | null = dataElement ? JSON.parse(dataElement.textContent || 'null') : null;
const blogs = data?.blogs || initialBlogSnapshot;
initializeBlogs(blogs);
const app = (
  <React.StrictMode>
    <BlogSsrContext.Provider value={blogs}>
      <App pathname={data?.pathname} />
    </BlogSsrContext.Provider>
  </React.StrictMode>
);
const root = document.getElementById('root')!;
if (root.hasChildNodes()) ReactDOM.hydrateRoot(root, app);
else ReactDOM.createRoot(root).render(app);
