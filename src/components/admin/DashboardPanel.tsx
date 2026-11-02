import React, { useEffect, useState } from 'react';
import { FileText, Inbox, Users, Mail } from 'lucide-react';
import { apiRequest } from '../../utils/adminApi';

type Destination = 'all-posts' | 'submissions' | 'users' | 'email-settings' | 'submission-settings';
interface Overview {
  posts: { published: number; drafts: number; trash: number };
  submissions?: { total: number; new: number; reviewed: number };
  users?: { total: number; active: number };
  email?: { configured: boolean; notifications: boolean; customerConfirmations: boolean };
}
export const DashboardPanel: React.FC<{ navigate: (destination: Destination) => void; newPost?: () => void }> = ({ navigate, newPost }) => {
  const [data, setData] = useState<Overview | null>(null); const [error, setError] = useState('');
  const [retry, setRetry] = useState(0);
  useEffect(() => { let cancelled = false; setError(''); setData(null);
    apiRequest<Overview>('/admin/dashboard').then(value => { if (!cancelled) setData(value); }).catch(error => { if (!cancelled) setError(error.message); });
    return () => { cancelled = true; };
  }, [retry]);
  return <>
    <div className="wp-page-heading"><div><h1>Dashboard</h1><p>An overview of your website and items that need attention.</p></div>{newPost && <button className="wp-primary" onClick={newPost}>Add New Post</button>}</div>
    {error ? <div className="wp-message" role="alert">{error}<button onClick={() => setRetry(value => value + 1)}>Try again</button></div> : !data ? <p role="status">Loading overview...</p> : <div className="wp-dashboard-grid">
      <section className="wp-dashboard-card"><h2><FileText size={20} />Posts</h2><strong className="wp-dashboard-total">{data.posts.published + data.posts.drafts}</strong><p>{data.posts.published} published · {data.posts.drafts} drafts · {data.posts.trash} in trash</p><button onClick={() => navigate('all-posts')}>Manage posts</button></section>
      {data.submissions && <section className="wp-dashboard-card"><h2><Inbox size={20} />Form Submissions</h2><strong className="wp-dashboard-total">{data.submissions.total}</strong><p><span className="wp-lead-status wp-lead-status-new">{data.submissions.new} new</span> <span className="wp-lead-status wp-lead-status-reviewed">{data.submissions.reviewed} reviewed</span></p><button onClick={() => navigate('submissions')}>View submissions</button></section>}
      {data.users && <section className="wp-dashboard-card"><h2><Users size={20} />Users</h2><strong className="wp-dashboard-total">{data.users.total}</strong><p>{data.users.active} active accounts</p><button onClick={() => navigate('users')}>Manage users</button></section>}
      {data.email && <section className="wp-dashboard-card"><h2><Mail size={20} />Email</h2><strong className="wp-dashboard-email-status">{data.email.configured ? 'Configured' : 'Setup needed'}</strong><p>Submission notifications: {data.email.notifications ? 'On' : 'Off'}<br />Customer confirmations: {data.email.customerConfirmations ? 'On' : 'Off'}</p><div className="wp-page-actions"><button onClick={() => navigate('email-settings')}>Email settings</button><button onClick={() => navigate('submission-settings')}>Notification settings</button></div></section>}
    </div>}
  </>;
};
