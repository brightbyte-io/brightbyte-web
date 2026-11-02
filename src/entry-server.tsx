import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import { BlogSsrContext, type BlogSnapshot } from './utils/blogContent';
import { parseRoute, getRouteUrl } from './utils/router';
import { servicesData } from './data/mockData';

export const staticPaths = ['/', '/about', '/services', '/how-we-work', '/contact', '/privacy-policy', '/terms-of-service', ...servicesData.map(service => `/services/${service.id}`)];

export function staticPath(pathname: string): string | null {
  const { page, detailId } = parseRoute(pathname, '');
  if (page === 'admin' || page === 'blog' || page === 'blog-post') return null;
  if (page === 'service-detail') {
    const id = detailId || 'mobile-app';
    const service = servicesData.find(service => service.id === id)
      || servicesData.find(service => service.id === id.replace(/-development$/, ''))
      || servicesData.find(service => id.includes(service.id)) || servicesData[0];
    return getRouteUrl(page, service.id);
  }
  return getRouteUrl(page);
}

export function render(pathname: string, blogs: BlogSnapshot) {
  return renderToString(
    <React.StrictMode>
      <BlogSsrContext.Provider value={blogs}>
        <App pathname={pathname} />
      </BlogSsrContext.Provider>
    </React.StrictMode>
  );
}
