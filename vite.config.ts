import { readFile } from 'node:fs/promises';
import { renderDocument } from './server/ssr.mjs';
import { defineConfig, loadEnv } from 'vite';
import { createApi } from './server/app.mjs';
import { createPool } from './server/db.mjs';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss(), {
    name: 'postgres-api',
    configureServer(server) {
      const env = loadEnv(mode, process.cwd(), '');
      const pool = createPool(env);
      const staticBodies = new Map<string, string>();
      server.watcher.on('all', (_event, file) => {
        if (file.includes('/src/') || file.includes('\\src\\')) staticBodies.clear();
      });
      server.middlewares.use('/api', createApi({ pool, env }));
      server.httpServer?.once('close', () => { void pool.end(); });
      return () => {
        server.middlewares.use(async (req, res, next) => {
          if (!['GET', 'HEAD'].includes(req.method || '') || !req.headers.accept?.includes('text/html')) return next();
          try {
            const url = req.originalUrl || req.url || '/';
            const pathname = new URL(url, 'http://localhost').pathname;
            const template = await server.transformIndexHtml(url, await readFile('index.html', 'utf8'));
            const { render, staticPath } = await server.ssrLoadModule('/src/entry-server.tsx');
            const canonical = staticPath(pathname);
            let staticPage;
            if (canonical !== null) {
              if (!staticBodies.has(canonical)) staticBodies.set(canonical, render(canonical, { posts: [], loading: false, error: '' }));
              staticPage = { pathname: canonical, body: staticBodies.get(canonical)! };
            }
            const html = await renderDocument(template, pathname, pool, render, staticPage);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.setHeader('Cache-Control', 'no-store');
            res.end(req.method === 'HEAD' ? undefined : html);
          } catch (error) {
            if (error instanceof Error) server.ssrFixStacktrace(error);
            next(error);
          }
        });
      };
    },
  }],
  server: {
    port: 3000,
    host: '127.0.0.1',
  },
}));
