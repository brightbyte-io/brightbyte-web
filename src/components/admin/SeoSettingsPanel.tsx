import { useEffect, useState } from 'react';
import { apiRequest } from '../../utils/adminApi';

interface Entry { key: string; title: string; description: string }
export function SeoSettingsPanel() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [selected, setSelected] = useState('');
  const [draft, setDraft] = useState<Entry | null>(null);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  useEffect(() => { let active = true; apiRequest<Entry[]>('/admin/metadata').then(rows => { if (active) { setEntries(rows); setSelected(rows[0]?.key || ''); setDraft(rows[0] || null); } }).catch(error => { if (active) setMessage(error.message); }); return () => { active = false; }; }, []);
  return <>
    <div className="wp-page-heading"><div><h1>SEO Settings</h1><p>Edit page titles and meta descriptions. Changes are saved in the database.</p></div></div>
    {message && <div className="wp-message" role="status">{message}</div>}
    {draft ? <form className="wp-contact-settings" onSubmit={async event => {
      event.preventDefault(); setBusy(true); setMessage('');
      try {
        const saved = await apiRequest<Entry>('/admin/metadata', { method: 'PUT', body: JSON.stringify(draft) });
        setEntries(rows => rows.map(row => row.key === saved.key ? saved : row)); setDraft(saved); setMessage('Metadata saved.');
      } catch (error) { setMessage((error as Error).message); } finally { setBusy(false); }
    }}><fieldset disabled={busy}>
      <label>Page<select value={selected} onChange={event => {
        const original = entries.find(row => row.key === selected);
        if (original && (original.title !== draft.title || original.description !== draft.description) && !window.confirm('Discard unsaved metadata changes?')) return;
        setSelected(event.target.value); setDraft(entries.find(row => row.key === event.target.value) || null); setMessage('');
      }}>{entries.map(row => <option key={row.key} value={row.key}>{row.key.replace('page:', 'Page: ').replace('service:', 'Service: ').replace('blog:', 'Article: ')}</option>)}</select></label>
      {selected === 'blog-template' && <p>Use {'{title}'} for the article title. This template applies to articles without an override.</p>}
      {selected.startsWith('blog:') && <p>Leave both fields empty to use the article title and summary automatically.</p>}
      <label style={{ marginTop: 16 }}>Meta title<input maxLength={300} value={draft.title} onChange={event => setDraft({ ...draft, title: event.target.value })} /></label>
      <p>{draft.title.length} characters. Aim for approximately 50–60 characters.</p>
      <label>Meta description<textarea rows={4} maxLength={1000} value={draft.description} onChange={event => setDraft({ ...draft, description: event.target.value })} /></label>
      <p>{draft.description.length} characters. Aim for approximately 140–160 characters.</p>
      <button className="wp-primary" disabled={busy}>{busy ? 'Saving...' : 'Save metadata'}</button>
    </fieldset></form> : !message && <p role="status">Loading metadata...</p>}
  </>;
}
