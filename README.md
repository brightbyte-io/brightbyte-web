# BrightByte website

React/Vite frontend with a Node API and PostgreSQL administration.

## Run locally

1. `npm install`
2. Configure `.env.local` using `.env.example`.
3. `npm run db:migrate`
4. `npm run dev`

Open `/admin` for the general dashboard. Log in with the seeded database account.

## Build / run

- `npm run build` builds the frontend.
- `npm start` runs the API and serves `dist` (configure NODE_ENV and server secrets).
- `npm run test:api` runs isolated database integration tests.

See [BLOG_EDITOR.md](BLOG_EDITOR.md) for schema, user roles, editing and production
hosting instructions. S3 alone cannot run the API; use a Node host or proxy `/api`
to one. Database credentials must remain server-side.