import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeft, Eye, FileText, LayoutDashboard, LogOut, Plus, Redo2, Save, Undo2, Search, Users, Inbox, Settings, ExternalLink, ChevronDown } from 'lucide-react';
import { BlogBlockEditor } from '../components/blog/BlogBlockEditor';
import { BlogBlocks } from '../components/blog/BlogBlocks';
import { BlogImagePicker } from '../components/blog/BlogImagePicker';
import { SubmissionsPanel } from '../components/admin/SubmissionsPanel';
import { MailSettingsPanel } from '../components/admin/MailSettingsPanel';
import { DashboardPanel } from '../components/admin/DashboardPanel';
import { UsersPanel } from '../components/admin/UsersPanel';
import { blocksText, ManagedBlog, postBlocks, safeImageUrl, refreshPublishedBlogs } from '../utils/blogContent';
import { apiRequest, AdminSession, AdminUser, setSession } from '../utils/adminApi';
import './AdminPage.css';

const emptyPost = (author: string): ManagedBlog => ({ id: crypto.randomUUID(), title: '', slug: '', summary: '', category: 'Insights', author, image: '', content: '', blocks: [], status: 'draft', updatedAt: '' });
const slugify = (text: string) => text.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const statusLabel = (status: ManagedBlog['status']) => status === 'published' ? 'Published' : status === 'trash' ? 'Trash' : 'Draft';

const AdminLogin: React.FC<{ onLogin: (session: AdminSession) => void; initialError: string }> = ({ onLogin, initialError }) => {
  const [username, setUsername] = useState(''); const [password, setPassword] = useState('');
  const [error, setError] = useState(initialError); const [busy, setBusy] = useState(false);
  return <main className="wp-login"><form onSubmit={async event => {
    event.preventDefault(); setBusy(true); setError('');
    try { const session = await apiRequest<AdminSession>('/auth/login', { method: 'POST', body: JSON.stringify({ username, password }) }); setSession(session); setPassword(''); onLogin(session); }
    catch (error) { setError((error as Error).message); setPassword(''); } finally { setBusy(false); }
  }}><img className="wp-login-logo" src="/images/bbc-logo.svg" alt="BrightByte Consulting" /><h1>Sign in to administration</h1><p>Manage content and access from one dashboard.</p>{error && <div className="wp-message error" role="alert">{error}</div>}<label>Username or email<input required autoComplete="username" value={username} onChange={event => setUsername(event.target.value)} autoFocus /></label><label>Password<input required type="password" autoComplete="current-password" value={password} onChange={event => setPassword(event.target.value)} /></label><button disabled={busy} className="wp-primary">{busy ? 'Signing in…' : 'Sign in'}</button></form><a href="/"><ArrowLeft size={15} />Back to BrightByte</a></main>;
};

export const AdminPage: React.FC = () => {
  const [session, updateSession] = useState<AdminSession | null>(null); const [loading, setLoading] = useState(true); const [error, setError] = useState('');
  useEffect(() => {
    if (window.location.pathname !== '/admin') window.history.replaceState(null, '', '/admin');
    let cancelled = false;
    const expired = () => { setSession(null); updateSession(null); };
    window.addEventListener('bb-auth-expired', expired);
    apiRequest<AdminSession>('/auth/session').then(session => { if (!cancelled) { setSession(session); updateSession(session); } }).catch(error => { if (!cancelled && error.status !== 401) setError(error.message); }).finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; window.removeEventListener('bb-auth-expired', expired); };
  }, []);
  if (loading) return <main className="admin-session-loading" role="status">Checking your session…</main>;
  if (!session) return <AdminLogin onLogin={updateSession} initialError={error} />;
  return <AdminWorkspace user={session.user} onLogout={async () => { await apiRequest('/auth/logout', { method: 'POST', body: '{}' }); setSession(null); updateSession(null); }} />;
};

const AdminWorkspace: React.FC<{ user: AdminUser; onLogout: () => Promise<void> }> = ({ user, onLogout }) => {
  const [posts, setPosts] = useState<ManagedBlog[]>([]); const [loading, setLoading] = useState(true); const [saving, setSaving] = useState(false);
  const [active, setActive] = useState<ManagedBlog | null>(null); const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<'all' | ManagedBlog['status']>('all'); const [selected, setSelected] = useState<string[]>([]);
  const [message, setMessage] = useState(''); const [dirty, setDirty] = useState(false); const [preview, setPreview] = useState(false);
  const [view, setView] = useState<'dashboard' | 'posts' | 'all-posts' | 'new-post' | 'edit-post' | 'users' | 'submissions' | 'submission-settings' | 'email-settings'>('dashboard');
  const [postsExpanded, setPostsExpanded] = useState(false);
  const [submissionsExpanded, setSubmissionsExpanded] = useState(false);
  useEffect(() => { if (['posts', 'all-posts', 'new-post', 'edit-post'].includes(view)) setPostsExpanded(true); if (['submissions', 'submission-settings'].includes(view)) setSubmissionsExpanded(true); }, [view]);
  const [undo, setUndo] = useState<ManagedBlog[]>([]); const [redo, setRedo] = useState<ManagedBlog[]>([]);
  const activeRef = useRef(active); activeRef.current = active;
  const [pendingImages, setPendingImages] = useState(0); const canEdit = user.userType !== 'viewer';
  const onImageLoadingChange = useCallback((loading: boolean) => setPendingImages(count => Math.max(0, count + (loading ? 1 : -1))), []);
  const loadPosts = useCallback(async () => {
    setLoading(true);
    try { setPosts(await apiRequest<ManagedBlog[]>('/admin/posts')); }
    catch (error) { setMessage((error as Error).message); } finally { setLoading(false); }
  }, []);
  useEffect(() => { void loadPosts(); }, [loadPosts]);
  useEffect(() => { if (!dirty) return; const warn = (event: BeforeUnloadEvent) => { event.preventDefault(); event.returnValue = ''; }; window.addEventListener('beforeunload', warn); return () => window.removeEventListener('beforeunload', warn); }, [dirty]);
  const allRecords = posts; const allPosts = posts;
  const filtered = allPosts.filter(post => (filter === 'all' ? post.status !== 'trash' : post.status === filter) && `${post.title} ${post.author} ${post.category}`.toLowerCase().includes(query.toLowerCase()));
  const discard = () => !dirty || window.confirm('Discard unsaved changes?');
  const openPost = (post: ManagedBlog, showPreview = false, target: 'new-post' | 'edit-post' = 'edit-post') => {
    if (!discard() || saving) return; setActive({ ...post, blocks: postBlocks(post) }); setView(target); setDirty(false); setPreview(showPreview || !canEdit); setMessage(''); setUndo([]); setRedo([]);
  };
  const closePost = (target: 'dashboard' | 'posts' | 'all-posts' = 'all-posts') => { if (!saving && discard()) { setActive(null); setView(target); setDirty(false); setMessage(''); } };
  const newPost = () => { if (canEdit) openPost(emptyPost(user.name), false, 'new-post'); };
  const update = (values: Partial<ManagedBlog>) => {
    const current = activeRef.current; if (!current || !canEdit || saving) return; setUndo(history => [...history.slice(-99), current]); setRedo([]);
    const next = { ...current, ...values }; activeRef.current = next; setActive(next); setDirty(true); setMessage('');
  };
  const travel = (direction: 'undo' | 'redo') => {
    if (saving || !canEdit) return; const history = direction === 'undo' ? undo : redo; const previous = history[history.length - 1]; if (!previous || !active) return;
    if (direction === 'undo') { setUndo(history.slice(0,-1)); setRedo(current => [...current, active]); } else { setRedo(history.slice(0,-1)); setUndo(current => [...current, active]); }
    setActive(previous); setDirty(true);
  };
  const save = async (status: 'draft' | 'published') => {
    if (!active || !canEdit || saving || pendingImages) return;
    if (!active.title.trim()) { setMessage('Please enter a post title.'); return; }
    const slug = slugify(active.slug || active.title);
    if (!slug || allRecords.some(post => post.id !== active.id && post.slug === slug)) { setMessage('Please choose a unique URL slug.'); return; }
    const blocks = postBlocks(active), content = blocksText(blocks);
    if ((active.image && !safeImageUrl(active.image)) || blocks.some(block => block.type === 'image' && block.url && !safeImageUrl(block.url))) { setMessage('An image is invalid. Please select it again.'); return; }
    setSaving(true); setMessage('');
    try {
      const existing = posts.some(post => post.id === active.id);
      const saved = await apiRequest<ManagedBlog>(`/admin/posts${existing ? `/${active.id}` : ''}`, { method: existing ? 'PUT' : 'POST', body: JSON.stringify({ ...active, slug, blocks, content, status }) });
      setPosts(current => [saved, ...current.filter(post => post.id !== active.id && post.id !== saved.id)]); setActive(saved); setDirty(false); setUndo([]); setRedo([]);
      setMessage(status === 'published' ? 'Post published. The live blog now reads this content from the database.' : 'Draft saved to the database.'); void refreshPublishedBlogs();
    } catch (error) { setMessage((error as Error).message); } finally { setSaving(false); }
  };
  const bulk = async (ids: string[], action: 'trash' | 'restore' | 'delete') => {
    if (!canEdit || saving || !ids.length) return;
    if (action === 'trash' && !window.confirm(`Move ${ids.length} post(s) to Trash?`)) return;
    if (action === 'delete' && !window.confirm(`Permanently delete ${ids.length} post(s)? Their database content and images will be removed. This cannot be undone.`)) return;
    setSaving(true);
    try { await apiRequest('/admin/posts/bulk', { method: 'POST', body: JSON.stringify({ ids, action }) }); setSelected([]); await loadPosts(); void refreshPublishedBlogs(); setMessage(action === 'delete' ? 'Posts permanently deleted from the database.' : action === 'restore' ? 'Restored as draft.' : 'Moved to Trash.'); }
    catch (error) { setMessage((error as Error).message); } finally { setSaving(false); }
  };
  const changeStatus = (ids: string[], status: 'trash' | 'draft') => bulk(ids, status === 'trash' ? 'trash' : 'restore');
  const deletePermanently = (ids: string[]) => bulk(ids, 'delete');
  const duplicate = (post: ManagedBlog) => openPost({ ...post, id: crypto.randomUUID(), title: `${post.title} (copy)`, slug: '', version: undefined, status: 'draft', updatedAt: '' }, false, 'new-post');

  return <div className="wp-admin">
    <header className="wp-adminbar"><div className="wp-admin-brand"><a href="/" target="_blank" rel="noopener noreferrer" aria-label="BrightByte home (opens in a new tab)"><img className="wp-admin-logo" src="/images/white-logo.svg" alt="BrightByte" /></a><a className="wp-visit-website" href="/" target="_blank" rel="noopener noreferrer">Visit website<ExternalLink size={14} aria-hidden="true" /></a></div><div><button onClick={() => { if (discard()) void onLogout(); }}><LogOut size={15} />Log out</button></div></header>
    <aside className="wp-sidebar" aria-label="Admin navigation">
      
      <button className={view === 'dashboard' ? 'active' : ''} aria-current={view === 'dashboard' ? 'page' : undefined} onClick={() => closePost('dashboard')}><LayoutDashboard size={18} />Dashboard</button>
      <button className={['posts', 'all-posts', 'new-post', 'edit-post'].includes(view) ? 'active' : ''} aria-expanded={postsExpanded} aria-controls="wp-posts-submenu" onClick={() => setPostsExpanded(value => !value)}><FileText size={18} />Posts<ChevronDown size={16} className={`wp-menu-caret ${postsExpanded ? 'expanded' : ''}`} /></button>
      <div id="wp-posts-submenu" className="wp-submenu" hidden={!postsExpanded}>
        <button className={`wp-subnav ${view === 'all-posts' || view === 'posts' || view === 'edit-post' ? 'active' : ''}`} aria-current={view === 'all-posts' || view === 'posts' || view === 'edit-post' ? 'page' : undefined} onClick={() => closePost('all-posts')}>All Posts</button>
        <button disabled={!canEdit} className={`wp-subnav ${view === 'new-post' ? 'active' : ''}`} aria-current={view === 'new-post' ? 'page' : undefined} onClick={newPost}>Add New Post</button>
      </div>
      {user.userType === 'admin' && <>
        <button className={view === 'submissions' || view === 'submission-settings' ? 'active' : ''} aria-expanded={submissionsExpanded} aria-controls="wp-submissions-submenu" onClick={() => setSubmissionsExpanded(value => !value)}><Inbox size={18} />Form Submissions<ChevronDown size={16} className={`wp-menu-caret ${submissionsExpanded ? 'expanded' : ''}`} /></button>
        <div id="wp-submissions-submenu" className="wp-submenu" hidden={!submissionsExpanded}>
        <button className={`wp-subnav ${view === 'submissions' ? 'active' : ''}`} aria-current={view === 'submissions' ? 'page' : undefined} onClick={() => { if (!saving && discard()) { setActive(null); setDirty(false); setMessage(''); setView('submissions'); } }}>All Submissions</button>
        <button className={`wp-subnav ${view === 'submission-settings' ? 'active' : ''}`} aria-current={view === 'submission-settings' ? 'page' : undefined} onClick={() => { if (!saving && discard()) { setActive(null); setDirty(false); setMessage(''); setView('submission-settings'); } }}>Settings</button>
        </div>
      </>}
      {user.userType === 'admin' && <button className={view === 'users' ? 'active' : ''} aria-current={view === 'users' ? 'page' : undefined} onClick={() => { if (discard()) { setActive(null); setDirty(false); setView('users'); } }}><Users size={18} />Users</button>}
      {user.userType === 'admin' && <button className={view === 'email-settings' ? 'active' : ''} aria-current={view === 'email-settings' ? 'page' : undefined} onClick={() => { if (!saving && discard()) { setActive(null); setDirty(false); setMessage(''); setView('email-settings'); } }}><Settings size={18} />Email Settings</button>}
    </aside>
    <main className="wp-main">
      {message && <div className="wp-message" role="status">{message}</div>}
      {view === 'dashboard' ? <DashboardPanel newPost={canEdit ? newPost : undefined} navigate={target => { setActive(null); setDirty(false); setMessage(''); setView(target); }} /> : view === 'email-settings' ? <MailSettingsPanel /> : view === 'submissions' || view === 'submission-settings' ? <SubmissionsPanel settings={view === 'submission-settings'} /> : view === 'users' ? <UsersPanel /> : !active ? <>
        <div className="wp-page-heading"><div><h1>Posts</h1><p>Create, organize, and publish your stories.</p></div><div className="wp-page-actions"><button className="wp-primary" disabled={!canEdit || saving} onClick={newPost}><Plus size={17} />Add New Post</button></div></div>
        <nav className="wp-post-filters" aria-label="Post status filters">{(['all', 'published', 'draft', 'trash'] as const).map(status => <button key={status} className={filter === status ? 'selected' : ''} aria-pressed={filter === status} onClick={() => { setFilter(status); setSelected([]); }}>{status === 'all' ? 'All' : status === 'published' ? 'Published' : status === 'draft' ? 'Drafts' : 'Trash'} <span>({allPosts.filter(post => status === 'all' ? post.status !== 'trash' : post.status === status).length})</span></button>)}</nav>
        <section className="wp-posts-panel">
          <div className="wp-list-toolbar"><div>{selected.length > 0 ? <><span>{selected.length} selected</span><button onClick={() => changeStatus(selected, filter === 'trash' ? 'draft' : 'trash')}>{filter === 'trash' ? 'Restore to draft' : 'Move to Trash'}</button>{filter === 'trash' && <button className="danger" onClick={() => deletePermanently(selected)}>Delete permanently</button>}</> : <span>{loading ? 'Loading posts?' : `${filtered.length} posts`}</span>}</div><label className="wp-search"><Search size={16} /><input type="search" aria-label="Search posts" placeholder="Search posts…" value={query} onChange={e => { setQuery(e.target.value); setSelected([]); }} /></label></div>
          <div className="wp-table-scroll"><table><thead><tr><th><input type="checkbox" aria-label="Select all displayed posts" disabled={!canEdit || saving} checked={filtered.length > 0 && filtered.every(post => selected.includes(post.id))} onChange={e => setSelected(e.target.checked ? filtered.map(post => post.id) : [])} /></th><th>Title</th><th>Author</th><th>Category</th><th>Status</th><th>Last updated</th></tr></thead><tbody>{filtered.map(post => <tr key={post.id}>
            <td><input type="checkbox" aria-label={`Select ${post.title || 'post'}`} disabled={!canEdit || saving} checked={selected.includes(post.id)} onChange={e => setSelected(current => e.target.checked ? [...current, post.id] : current.filter(id => id !== post.id))} /></td>
            <td><button className="wp-post-title" onClick={() => openPost(post, !canEdit)}>{post.title || 'Unpublished post'}</button><div className="wp-row-actions">{!canEdit ? <button onClick={() => openPost(post, true)}>Preview</button> : post.status === 'trash' ? <><button onClick={() => changeStatus([post.id], 'draft')}>Restore</button><button className="danger" onClick={() => deletePermanently([post.id])}>Delete permanently</button></> : <><button onClick={() => openPost(post)}>Edit</button><button onClick={() => openPost(post, true)}>Preview</button><button onClick={() => duplicate(post)}>Duplicate</button><button className="danger" onClick={() => changeStatus([post.id], 'trash')}>Trash</button></>}</div></td>
            <td>{post.author || '—'}</td><td>{post.category || '—'}</td><td><span className={`wp-status ${post.status}`}>{statusLabel(post.status)}</span></td><td>{post.updatedAt ? new Date(post.updatedAt).toLocaleDateString('en-GB', { timeZone: 'Asia/Karachi', day: 'numeric', month: 'short', year: 'numeric' }) : 'Original article'}</td>
          </tr>)}</tbody></table></div>
          {!loading && !filtered.length && <div className="wp-no-posts"><FileText size={36} /><h2>No posts found</h2><p>{query ? 'Try another search.' : 'Your posts will appear here.'}</p></div>}
        </section>
      </> : <>
        <div className="wp-editor-topbar"><button onClick={() => closePost()}><ArrowLeft size={17} />All Posts</button><div className="wp-history"><button disabled={!undo.length} onClick={() => travel('undo')} aria-label="Undo"><Undo2 size={17} /></button><button disabled={!redo.length} onClick={() => travel('redo')} aria-label="Redo"><Redo2 size={17} /></button><span>{dirty ? 'Unsaved changes' : active.updatedAt ? 'Saved to database' : 'New post'}</span></div><div className="wp-editor-top-actions"><button disabled={pendingImages > 0} onClick={() => setPreview(!preview)}><Eye size={16} />{preview ? 'Edit' : 'Preview'}</button><button disabled={pendingImages > 0 || saving || !canEdit} onClick={() => save('draft')}><Save size={16} />Save draft</button><button disabled={pendingImages > 0 || saving || !canEdit} className="wp-primary" onClick={() => save('published')}>{active.status === 'published' ? 'Update post' : 'Publish'}</button></div></div>
        <div className="wp-editor-layout">
          <section className="wp-editor-canvas" aria-label={preview ? 'Post preview' : 'Post block editor'}>
            {preview ? <article className="wp-preview"><span>{active.category}</span><h1>{active.title || 'Untitled post'}</h1><p className="wp-preview-summary">{active.summary}</p><small>By {active.author}</small>{active.image && safeImageUrl(active.image) && <img className="wp-preview-cover" src={active.image} alt={active.title} />}<BlogBlocks blocks={postBlocks(active)} eagerImages /></article> : <>
              <label className="sr-only" htmlFor="wp-post-title">Post title</label><textarea id="wp-post-title" className="wp-title-input" rows={2} maxLength={180} placeholder="Add title" value={active.title} onChange={e => update({ title: e.target.value })} />
              <BlogBlockEditor key={active.id} blocks={postBlocks(active)} onChange={blocks => update({ blocks, content: blocksText(blocks) })} onImageLoadingChange={onImageLoadingChange} />
              <div className="wp-word-count">{(active.content.match(/\S+/g) || []).length} words · {postBlocks(active).length} blocks</div>
            </>}
          </section>
          <aside className="wp-settings" aria-label="Post settings"><h2>Post settings</h2><section><h3>Summary</h3><dl><div><dt>Status</dt><dd><span className={`wp-status ${active.status}`}>{statusLabel(active.status)}</span></dd></div><div><dt>Visibility</dt><dd>{active.status === 'published' ? 'Public' : 'Private'}</dd></div></dl><label>Author<input value={active.author} onChange={e => update({ author: e.target.value })} /></label><label>URL slug<input value={active.slug} onChange={e => update({ slug: e.target.value })} placeholder={slugify(active.title) || 'post-title'} /><small>/blog/{slugify(active.slug || active.title)}</small></label></section>
            <section><h3>Category</h3><label><span className="sr-only">Category</span><input value={active.category} onChange={e => update({ category: e.target.value })} placeholder="Insights" /></label></section>
            <section><h3>Featured image</h3><BlogImagePicker key={active.id} value={active.image} onChange={image => update({ image })} label="Featured image" alt="Featured image preview" onLoadingChange={onImageLoadingChange} /></section>
            <section><h3>Excerpt</h3><label><span className="sr-only">Post excerpt</span><textarea aria-label="Post excerpt" rows={5} maxLength={500} value={active.summary} onChange={e => update({ summary: e.target.value })} placeholder="Write a short introduction for the blog listing…" /></label><small>{active.summary.length}/500 characters</small></section>
          </aside>
        </div>
      </>}
    </main>
  </div>;
};
