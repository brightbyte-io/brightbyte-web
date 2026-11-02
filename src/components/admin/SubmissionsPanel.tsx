import React, { useEffect, useState } from 'react';
import { apiRequest } from '../../utils/adminApi';

interface Submission { id: string; full_name: string; phone: string; email: string; services: string[]; message: string; status: 'new' | 'reviewed'; notification_status: string; customer_email_status: string; created_at: string; }
interface SubmissionPage { submissions: Submission[]; total: number; counts: Record<'all' | 'new' | 'reviewed', number>; }
interface Settings { notificationEmail: string; sendCustomerEmail: boolean; mailConfigured: boolean; }

export const SubmissionsPanel: React.FC<{ settings: boolean }> = ({ settings: showSettings }) => {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [items, setItems] = useState<Submission[]>([]);
  const [filter, setFilter] = useState<'all' | 'new' | 'reviewed'>('all');
  const [counts, setCounts] = useState({ all: 0, new: 0, reviewed: 0 });
  const [revision, setRevision] = useState(0);
  const [page, setPage] = useState(1); const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true); const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  useEffect(() => {
    let cancelled = false; setLoading(true); setMessage('');
    (showSettings ? apiRequest<Settings>('/admin/contact-settings').then(result => { if (!cancelled) setSettings(result); }) : apiRequest<SubmissionPage>(`/admin/submissions?page=${page}&status=${filter}`).then(result => { if (!cancelled) { setItems(result.submissions); setTotal(result.total); setCounts(result.counts); } }))
      .catch(error => { if (!cancelled) setMessage(error.message); }).finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [showSettings, page, filter, revision]);
  const mark = async (item: Submission) => {
    setBusy(true); setMessage(''); const status = item.status === 'new' ? 'reviewed' : 'new';
    try { await apiRequest(`/admin/submissions/${item.id}`, { method: 'PATCH', body: JSON.stringify({ status }) }); if (filter !== 'all' && items.length === 1 && page > 1) setPage(page - 1); setRevision(value => value + 1); }
    catch (error) { setMessage((error as Error).message); } finally { setBusy(false); }
  };
  return <>
    <div className="wp-page-heading"><div><h1>{showSettings ? 'Submission Settings' : 'All Submissions'}</h1><p>{showSettings ? 'Manage contact form email notifications.' : 'Consultation requests from the contact page.'}</p></div></div>
    {message && <div className="wp-message" role="status">{message}</div>}
    {!showSettings && <nav className="wp-post-filters" aria-label="Submission status filters">{(['all', 'new', 'reviewed'] as const).map(status => <button key={status} className={filter === status ? 'selected' : ''} aria-pressed={filter === status} disabled={busy || loading} onClick={() => { setFilter(status); setPage(1); }}>{status === 'all' ? 'All' : status === 'new' ? 'New' : 'Reviewed'} <span>({counts[status]})</span></button>)}</nav>}
    {loading ? <p role="status">Loading…</p> : showSettings ? settings && <form className="wp-contact-settings" onSubmit={async event => {
      event.preventDefault(); setBusy(true); setMessage('');
      try { await apiRequest('/admin/contact-settings', { method: 'PUT', body: JSON.stringify(settings) }); setMessage('Settings saved.'); }
      catch (error) { setMessage((error as Error).message); } finally { setBusy(false); }
    }}>
      <h2>Email notifications</h2>
      <label>Send new submission notifications to<input type="email" maxLength={254} value={settings.notificationEmail} placeholder="leads@yourcompany.com" onChange={event => setSettings({ ...settings, notificationEmail: event.target.value })} /></label>
      <p>Leave empty to disable internal notifications. Every submission is still saved.</p>
      <label className="wp-contact-checkbox"><input type="checkbox" checked={settings.sendCustomerEmail} onChange={event => setSettings({ ...settings, sendCustomerEmail: event.target.checked })} />Send a confirmation email to the customer</label>
      <p>The confirmation thanks the customer and confirms a response within one business day.</p>
      <p>{settings.mailConfigured ? 'Shared Brevo sender settings are configured.' : 'Set up your Brevo API key and verified sender in Email Settings in the admin menu.'}</p>
      <button className="wp-primary" disabled={busy}>{busy ? 'Saving…' : 'Save settings'}</button>
    </form> : <section className="wp-posts-panel">
      <div className="wp-list-toolbar"><span>{total} submissions</span><div><button disabled={page <= 1 || busy} onClick={() => setPage(page - 1)}>Previous</button><span>Page {page}</span><button disabled={page * 50 >= total || busy} onClick={() => setPage(page + 1)}>Next</button></div></div>
      <div className="wp-table-scroll"><table className="wp-submissions-table"><thead><tr><th>Contact</th><th>Services</th><th>Message</th><th>Email status</th><th>Received</th><th>Status</th></tr></thead><tbody>{items.map(item => <tr key={item.id}>
        <td><strong>{item.full_name}</strong><p><a href={`mailto:${item.email}`}>{item.email}</a></p><p>{item.phone}</p></td>
        <td><p>{item.services.join(', ') || 'No services selected'}</p></td>
        <td><span className="wp-submission-message" tabIndex={0}>{Array.from(item.message).length > 100 ? `${Array.from(item.message).slice(0, 100).join('')}...` : item.message}<span className="wp-submission-message-tooltip" role="tooltip">{item.message}</span></span></td>
        <td><p>Team: {item.notification_status}</p><p>Customer: {item.customer_email_status}</p></td>
        <td>{new Date(item.created_at).toLocaleString()}</td>
        <td><p><span className={`wp-lead-status wp-lead-status-${item.status}`}>{item.status === 'new' ? 'New' : 'Reviewed'}</span></p><button disabled={busy} onClick={() => void mark(item)}>Mark as {item.status === 'new' ? 'reviewed' : 'new'}</button></td>
      </tr>)}</tbody></table></div>
      {!items.length && <div className="wp-no-posts">No submissions found.</div>}
    </section>}
  </>;
};
