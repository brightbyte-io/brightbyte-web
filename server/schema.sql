CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY,
  username text NOT NULL,
  email text NOT NULL,
  name text NOT NULL,
  password_hash text NOT NULL,
  user_type text NOT NULL DEFAULT 'editor' CHECK (user_type IN ('admin','editor','viewer')),
  is_active boolean NOT NULL DEFAULT true,
  session_version integer NOT NULL DEFAULT 1,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS users_username_unique ON users(lower(username));
CREATE UNIQUE INDEX IF NOT EXISTS users_email_unique ON users(lower(email));
CREATE TABLE IF NOT EXISTS posts (
  id text PRIMARY KEY,
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  post_type text NOT NULL DEFAULT 'post',
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','published','trash')),
  author_id uuid NOT NULL REFERENCES users(id),
  version integer NOT NULL DEFAULT 1,
  published_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS posts_publication ON posts(status, published_at DESC);
CREATE TABLE IF NOT EXISTS postmeta (
  post_id text PRIMARY KEY REFERENCES posts(id) ON DELETE CASCADE,
  data jsonb NOT NULL DEFAULT '{}'::jsonb CHECK (jsonb_typeof(data) = 'object'),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS contact_settings (
  id boolean PRIMARY KEY DEFAULT true CHECK (id),
  notification_email text NOT NULL DEFAULT '',
  send_customer_email boolean NOT NULL DEFAULT false,
  updated_at timestamptz NOT NULL DEFAULT now()
);
INSERT INTO contact_settings(id) VALUES(true) ON CONFLICT DO NOTHING;
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY,
  full_name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  services jsonb NOT NULL DEFAULT '[]'::jsonb,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new','reviewed')),
  notification_status text NOT NULL DEFAULT 'pending',
  customer_email_status text NOT NULL DEFAULT 'disabled',
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS contact_submissions_created ON contact_submissions(created_at DESC);
CREATE TABLE IF NOT EXISTS mail_settings (
  id boolean PRIMARY KEY DEFAULT true CHECK (id),
  sender_email text NOT NULL DEFAULT '',
  sender_name text NOT NULL DEFAULT 'BrightByte',
  api_key_encrypted text NOT NULL DEFAULT '',
  updated_at timestamptz NOT NULL DEFAULT now()
);
