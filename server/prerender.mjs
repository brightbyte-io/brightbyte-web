import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { render, staticPaths } from '../dist/server/entry-server.js';
import { renderDocument } from './ssr.mjs';
import { renderPageHead } from './pageHtml.mjs';

const output = new URL('../dist/', import.meta.url);
const template = await readFile(new URL('index.html', output), 'utf8');
// Preserve the empty template for the Node server's dynamic responses.
await writeFile(new URL('server/template.html', output), template);
const blogs = { posts: [], loading: false, error: '' };
const bodies = Object.fromEntries(staticPaths.map(pathname => [pathname, render(pathname, blogs)]));
await writeFile(new URL('../dist/server/static-pages.json', import.meta.url), JSON.stringify(bodies));
for (const pathname of staticPaths) {
  const directory = new URL(pathname === '/' ? './' : `${pathname.slice(1)}/`, output);
  await mkdir(directory, { recursive: true });
  const html = await renderDocument(template, pathname, undefined, render, { pathname, body: bodies[pathname] });
  await writeFile(new URL('index.html', directory), html);
}
// These pages load their data in the browser when hosted without Node.
for (const pathname of ['/blog', '/admin']) {
  const directory = new URL(`${pathname.slice(1)}/`, output);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL('index.html', directory), await renderPageHead(template, pathname, undefined));
}
// Use this shell for unknown SPA paths, rather than the prerendered homepage.
await writeFile(new URL('404.html', output), template);
console.log(`Prerendered ${Object.keys(bodies).length} static pages.`);
