import React, { useEffect, useState } from 'react';
import { apiRequest } from '../../utils/adminApi';

interface MailSettings { senderEmail: string; senderName: string; apiKeyConfigured: boolean; }
export const MailSettingsPanel: React.FC = () => {
  const [settings, setSettings] = useState<MailSettings | null>(null);
  const [apiKey, setApiKey] = useState(''); const [clearApiKey, setClearApiKey] = useState(false);
  const [busy, setBusy] = useState(false); const [message, setMessage] = useState('');
  useEffect(() => { let cancelled = false; apiRequest<MailSettings>('/admin/mail-settings').then(value => { if (!cancelled) setSettings(value); }).catch(error => { if (!cancelled) setMessage(error.message); }); return () => { cancelled = true; }; }, []);
  return <>
    <div className="wp-page-heading"><div><h1>Email Settings</h1><p>Shared sender settings for website emails.</p></div></div>
    {message && <div className="wp-message" role="status">{message}</div>}
    {settings ? <form className="wp-contact-settings" onSubmit={async event => {
      event.preventDefault(); setBusy(true); setMessage('');
      try {
        await apiRequest('/admin/mail-settings', { method: 'PUT', body: JSON.stringify({ ...settings, apiKey, clearApiKey }) });
        setSettings(await apiRequest<MailSettings>('/admin/mail-settings')); setApiKey(''); setClearApiKey(false); setMessage('Email settings saved.');
      } catch (error) { setMessage((error as Error).message); } finally { setBusy(false); }
    }}>
      <fieldset disabled={busy}>
        <h2>Brevo</h2>
        <label>Sender name<input required maxLength={100} value={settings.senderName} onChange={event => setSettings({ ...settings, senderName: event.target.value })} /></label>
        <p>The name customers see in their inbox.</p>
        <label>Sender email<input type="email" maxLength={254} value={settings.senderEmail} placeholder="contact@yourcompany.com" onChange={event => setSettings({ ...settings, senderEmail: event.target.value })} /></label>
        <p>Use a sender address verified in Brevo.</p>
        <label>Brevo API key<input type="password" autoComplete="new-password" maxLength={1024} disabled={clearApiKey} value={apiKey} placeholder={settings.apiKeyConfigured ? 'Key saved — leave blank to keep it' : 'Enter your Brevo API key'} onChange={event => setApiKey(event.target.value)} /></label>
        <p>{settings.apiKeyConfigured ? 'An API key is saved. Its value is never shown.' : 'No API key is configured.'} Use an API key, not an SMTP key.</p>
        {settings.apiKeyConfigured && <label className="wp-contact-checkbox"><input type="checkbox" checked={clearApiKey} onChange={event => { setClearApiKey(event.target.checked); setApiKey(''); }} />Remove saved API key and disable sending</label>}
        <p>These sender settings apply to both contact notifications and customer confirmations. Choose recipients and customer confirmations under Form Submissions → Settings.</p>
        <button className="wp-primary" disabled={busy}>{busy ? 'Saving…' : 'Save email settings'}</button>
      </fieldset>
    </form> : !message && <p role="status">Loading…</p>}
  </>;
};
