import { PageId } from '../types';

export function parseRoute(
  pathname: string = typeof window !== 'undefined' ? window.location.pathname : '',
  hash: string = typeof window !== 'undefined' ? window.location.hash : ''
): { page: PageId; detailId?: string } {
  // Primary: Clean pathname (e.g. /about or /services/mobile-app)
  const cleanPath = pathname.replace(/^\//, '').replace(/\/$/, '').trim();
  // Secondary: Clean hash in case an old link or bookmark has hash
  const cleanHash = hash.replace(/^#\/?/, '').replace(/\/$/, '').trim();

  const route = cleanPath || cleanHash;

  if (!route || route === 'home') {
    return { page: 'home' };
  }

  // Split into path segments
  const segments = route.split('/').map((s) => decodeURIComponent(s.trim()));
  const first = segments[0]?.toLowerCase();
  const second = segments[1];

  switch (first) {
    case 'about':
      return { page: 'about' };

    case 'services':
    case 'service':
      if (second) {
        return { page: 'service-detail', detailId: second };
      }
      return { page: 'services' };

    case 'service-detail':
      return { page: 'service-detail', detailId: second || 'mobile-app' };

    case 'how-we-work':
    case 'howwework':
    case 'process':
      return { page: 'how-we-work' };

    case 'blog':
    case 'blogs':
      if (second) {
        return { page: 'blog-post', detailId: second };
      }
      return { page: 'blog' };

    case 'blog-post':
      return { page: 'blog-post', detailId: second || '1' };

    case 'contact':
    case 'contact-us':
      return { page: 'contact' };

    default:
      return { page: 'home' };
  }
}

/**
 * Generates the clean, modern URL path (without '/#/') for a given page and optional detailId.
 */
export function getRouteUrl(page: PageId, detailId?: string): string {
  switch (page) {
    case 'home':
      return '/';
    case 'about':
      return '/about';
    case 'services':
      return '/services';
    case 'service-detail':
      return detailId ? `/services/${detailId}` : '/services';
    case 'how-we-work':
      return '/how-we-work';
    case 'blog':
      return '/blog';
    case 'blog-post':
      return detailId ? `/blog/${detailId}` : '/blog';
    case 'contact':
      return '/contact';
    default:
      return '/';
  }
}

/**
 * Navigates to the desired page using clean HTML5 pushState (no /#/).
 */
export function navigateTo(page: PageId, detailId?: string): void {
  if (typeof window === 'undefined') return;

  const targetPath = getRouteUrl(page, detailId);
  if (window.location.pathname !== targetPath || window.location.hash) {
    window.history.pushState(null, '', targetPath);
  }
  // Dispatch popstate event so listeners immediately update view
  window.dispatchEvent(new PopStateEvent('popstate'));
}
