import metadata from './src/data/pageMetadata.json';
import { defineConfig, loadEnv } from 'vite';
import { createApi } from './server/app.mjs';
import { createPool } from './server/db.mjs';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss(), {
    name: 'postgres-api',
    transformIndexHtml(html) {
      const escape = (value: string) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
      return html.replace(/<title>[\s\S]*?<\/title>/, '<title>' + escape(metadata.pages.home.title) + '</title>')
        .replace(/(<meta (?:name="description"|property="og:description") content=")[^"]*("\s*\/>)/g, '$1' + escape(metadata.pages.home.description) + '$2')
        .replace(/(<meta property="og:title" content=")[^"]*("\s*\/>)/, '$1' + escape(metadata.pages.home.title) + '$2');
    },
    configureServer(server) {
      const env = loadEnv(mode, process.cwd(), '');
      const pool = createPool(env);
      server.middlewares.use('/api', createApi({ pool, env }));
      server.httpServer?.once('close', () => { void pool.end(); });
    },
  }],
  server: {
    port: 3000,
    host: '127.0.0.1',
  },
}));
