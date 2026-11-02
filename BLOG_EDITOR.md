# BrightByte administration — PostgreSQL

The general dashboard is `/admin`. Posts, users, login, and publication are now
managed through the Node API and PostgreSQL. Export/deploy controls and the old
localStorage publishing workflow have been removed. Published content becomes
available from the database immediately; it does not require a frontend rebuild.

## Local setup

1. Run `npm install`.
2. Configure the server-only settings in `.env.local` (see `.env.example`).
3. Run `npm run db:migrate` once to create tables and seed the initial administrator
   and existing articles. Re-running preserves passwords/content and does not
   re-create deleted seed posts.
4. Run `npm run dev` and open `http://127.0.0.1:3000/admin`.

The supplied database has already been initialized with an administrator and
seven existing posts. Initial admin credentials are the `ADMIN_USERNAME` and
`ADMIN_PASSWORD` values in `.env.local`; the previous local editor credentials
were moved to these server-only names. Sign in with username or email. Seeding
never changes an existing user's password. Subsequent account changes happen
in the Users tab, not by editing seed environment variables.

`DATABASE_URL` and `SESSION_SECRET` must never have a VITE_ prefix. The session
secret must be random and at least 32 characters. Environment files are ignored
by Git and Docker; no credentials are embedded in the client bundle.

## Tables

| Table | Purpose |
| --- | --- |
| `users` | UUID, username, email, full name, salted password hash, user type, active status, session version, timestamps |
| `posts` | ID, unique slug, title, post type, status, author account ID, version, publication/update timestamps |
| `postmeta` | One JSONB document per post containing content, blocks, image data, excerpt, author byline, category and post data |

`postmeta.post_id` references `posts.id` with `ON DELETE CASCADE`. Post and
metadata writes are transactional. Updates use a version number: another
editor's newer changes produce a conflict instead of being overwritten.

Schema: `server/schema.sql`. Migration/seeding: `server/migrate.mjs`.

## Users and access

- **Administrator**: manages posts and users. Can create accounts, edit details,
  reset passwords, choose user types, and deactivate accounts.
- **Editor**: manages posts but cannot manage users.
- **Viewer**: reads the dashboard and previews posts; cannot modify content.

There is no public registration. Only an administrator can create an account.
Passwords use salted scrypt hashes. Sessions use signed, expiring HttpOnly
cookies, Secure in production, with server-side account/version checks and CSRF
protection. Logout and account changes revoke existing sessions. The last active
administrator cannot be demoted or disabled. Failed sign-ins are rate limited.

## Posts

The sidebar contains Dashboard, Posts, All Posts, Add New Post, and (for admins)
Users. All internal tabs use the generic `/admin` route. Old admin subpaths resolve
to `/admin` for compatibility.

Use the block builder for paragraphs, H2/H3 headings, lists, quotes, images,
separators, and FAQ accordions. Bold, italic and link controls use safe text markup;
HTML is never injected. Preview uses the public article's block renderer.

**Save draft** stores private work in PostgreSQL. **Publish** and **Update post**
make it available from the public API immediately. The public website fetches
published posts only and refreshes when revisited/focused or periodically.

Trash supports single/bulk restore and permanent delete. Permanent deletion
requires confirmation and physically removes both the post and its metadata.
It cannot be undone from the dashboard. A database backup is required to recover it.

Selected image files are embedded in JSONB (JPG, PNG, GIF, WebP; up to 1 MB each).
Requests have an 8 MB total limit. No browser storage or media URL entry is needed.
Existing images using HTTPS/site-relative URLs remain compatible.

The original source data is used only for first-install seeding. The public list,
article pages, and related articles read the API; removed articles do not fall
back to hardcoded sample content. Previous browser-local drafts are not deleted
but are no longer used as an authoritative data source.

## Production hosting — important for the current S3 pipeline

S3 serves static files; it cannot execute the Node API or connect to PostgreSQL.
The existing GitHub workflow still builds/uploads the frontend to S3. To use the
database on the live site, also run the API on a Node/container host and route
requests to it. No application deployment has been performed by this change.

Two supported arrangements:

1. **Same origin (recommended)**: run `npm run build` and `npm start` on a Node host,
   or route `/api/*` from CloudFront/reverse proxy to the Node API. Leave
   `VITE_API_BASE_URL` empty. The Node server can serve both `dist` and `/api`.
2. **Same-site API subdomain**: run the API at e.g. `https://api.brightbyte.io` and
   set the GitHub repository variable `VITE_API_BASE_URL` to that URL for the S3
   frontend build. Set server `APP_ORIGIN` to the exact frontend origin, e.g.
   `https://brightbyte.io`. Use HTTPS on both. Avoid unrelated third-party API
   domains because browsers can block cross-site authentication cookies.

Set these environment values on the API host:

- `DATABASE_URL`: PostgreSQL connection string (TLS certificate verification enabled).
- `SESSION_SECRET`: strong random secret; changing it signs out all sessions.
- `NODE_ENV=production`: enables Secure cookies.
- `APP_ORIGIN`: exact public frontend origin, without trailing slash.
- `HOST=0.0.0.0`, `PORT=4000` as appropriate for your container host.
- `TRUST_PROXY=1` only when there is exactly one trusted proxy in front of Node.

The provided Dockerfile builds the frontend and runs the Node API. Supply secrets
at runtime, not as Docker build arguments. The database is already migrated;
for a new database, run `npm run db:migrate` from a development/CI checkout before
starting the runtime container. Migration seeding uses the source files and
TypeScript toolchain, which are intentionally absent from the runtime image.

Do not put DATABASE_URL or SESSION_SECRET into the S3/GitHub frontend build
variables. Only the API base URL is public. AWS S3 credentials remain in the
existing GitHub secrets; the old BLOG_GITHUB_TOKEN is no longer used.

## Verify

- `npm run build`: TypeScript and production frontend build.
- `npm run test:api`: database-backed integration tests for login, permissions,
  CSRF, JSONB, concurrency, trash/delete, logout and login rate limits.

API tests create and remove an isolated, randomly named `bb_test_*` database
schema. They do not change public users or published posts. Never run tests with
an account that cannot create temporary schemas; use a separate test database
in stricter production setups.
## Contact form submissions

The contact page saves consultation requests to the separate contact_submissions table. Administrators can open Form Submissions ? All Submissions to view contact details, selected services, full messages, email status and mark leads reviewed. Lists are paginated at 50 entries. Editors and viewers cannot access leads or notification settings.

Form Submissions ? Settings stores the notification recipient and the customer-confirmation switch in contact_settings. An empty recipient disables internal notifications; customer confirmation defaults to off. All submissions remain saved regardless of email results. Email statuses distinguish disabled, not configured, failed, pending and accepted by Brevo; provider acceptance does not confirm inbox delivery.

Configure your Brevo API key and verified sender in the shared Email Settings admin tab. Existing server-only BREVO_API_KEY, BREVO_SENDER_EMAIL and BREVO_SENDER_NAME values are supported until settings are first saved in admin. Never prefix secret environment variables with VITE_. This uses Brevo's transactional REST API, not an SMTP key: https://developers.brevo.com/docs/send-a-transactional-email

Run npm run db:migrate before deploying the updated API. The migration adds these tables without changing existing users or posts. The public form validates contact fields/services and limits submissions per IP. Set TRUST_PROXY=1 only when the API is behind your trusted reverse proxy. Email failures are shown in the lead list; automated retries are not enabled.

### Shared email settings

Administrators can configure the Brevo API key, verified sender email and sender name in Email Settings in the main admin menu. These settings are shared across website email features; Form Submissions ? Settings only controls notification recipients and customer confirmations. No restart is needed for changes made in admin.

Saved API keys are encrypted in mail_settings using AES-256-GCM. Keys are never returned by the admin API. Leave the key field blank to retain it, or select Remove saved API key to disable sending. Database settings override environment values once saved; before the first save, existing BREVO_* environment values are used.

Encryption uses the server-only MAIL_ENCRYPTION_KEY, with SESSION_SECRET as a fallback for existing installations. Keep the encryption secret stable and backed up; changing it requires re-entering the API key. Configure a dedicated MAIL_ENCRYPTION_KEY before saving credentials if you rotate session secrets independently.
