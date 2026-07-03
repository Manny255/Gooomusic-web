import { createServer } from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, join, normalize, resolve } from 'node:path';

const host = process.env.HOST || '0.0.0.0';
const port = Number(process.env.PORT || 3000);
const root = resolve(process.cwd(), 'out');

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
};

function resolveFile(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split('?')[0]).replace(/^\/+/, '');
  const requested = normalize(cleanPath);
  let filePath = resolve(root, requested || 'index.html');

  if (!filePath.startsWith(root)) return null;
  if (existsSync(filePath) && statSync(filePath).isDirectory()) {
    filePath = join(filePath, 'index.html');
  }
  if (existsSync(filePath)) return filePath;

  const htmlPath = resolve(root, `${requested}.html`);
  if (htmlPath.startsWith(root) && existsSync(htmlPath)) return htmlPath;

  const notFoundPath = resolve(root, '404.html');
  return existsSync(notFoundPath) ? notFoundPath : null;
}

createServer((req, res) => {
  const filePath = resolveFile(req.url || '/');
  if (!filePath) {
    res.writeHead(404);
    res.end('Not found');
    return;
  }

  const status = filePath.endsWith('404.html') && !(req.url || '/').includes('404') ? 404 : 200;
  const ext = extname(filePath);
  res.writeHead(status, {
    'Content-Type': types[ext] || 'application/octet-stream',
    'Cache-Control': filePath.includes(`${root}\\_next`) || filePath.includes(`${root}/_next`)
      ? 'public, max-age=31536000, immutable'
      : 'no-cache',
  });
  createReadStream(filePath).pipe(res);
}).listen(port, host, () => {
  console.log(`GoooMusic web served from ${root}`);
  console.log(`Local:   http://localhost:${port}`);
  console.log(`Network: http://${host}:${port}`);
});