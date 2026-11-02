export interface AdminUser { id: string; username: string; email: string; name: string; userType: 'admin' | 'editor' | 'viewer'; isActive: boolean; }
export interface AdminSession { user: AdminUser; csrfToken: string; }
let csrfToken = '';
export function setSession(session: AdminSession | null) { csrfToken = session?.csrfToken || ''; }
export class ApiError extends Error { constructor(message: string, public status: number) { super(message); } }
export async function apiRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const base = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');
  const response = await fetch(`${base}/api${endpoint}`, {
    ...options, credentials: 'include', cache: 'no-store',
    headers: { Accept: 'application/json', ...(options.body ? { 'Content-Type': 'application/json', 'X-CSRF-Token': csrfToken } : {}) },
  });
  if (!response.headers.get('content-type')?.includes('application/json')) throw new ApiError('The API server is not connected. Check the server configuration.', 503);
  const body = await response.json();
  if (!response.ok) {
    if (response.status === 401) window.dispatchEvent(new Event('bb-auth-expired'));
    throw new ApiError(body.message || 'The request could not be completed.', response.status);
  }
  return body as T;
}
