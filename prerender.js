import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8080;
const DIST_DIR = path.join(__dirname, 'dist');

const ROUTES = [
  '/',
  '/contact',
  '/about',
  '/blogs',
  '/events',
  '/blog/1',
  '/blog/2',
  '/blog/3',
  '/blog/4',
  '/topics/poems',
  '/topics/biography',
  '/topics/quotes',
  '/topics/motivation',
  '/topics/self-development',
];

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'font/otf',
};

// Start a simple server to serve build assets
function startServer() {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const decodedUrl = decodeURIComponent(req.url.split('?')[0]);
      let filePath = path.join(DIST_DIR, decodedUrl);

      fs.stat(filePath, (err, stats) => {
        // If it doesn't exist or is a directory, fall back to the temp SPA index file
        if (err || stats.isDirectory()) {
          filePath = path.join(DIST_DIR, 'index.temp.html');
        }

        fs.readFile(filePath, (readErr, data) => {
          if (readErr) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
            return;
          }

          const ext = path.extname(filePath).toLowerCase();
          const contentType = MIME_TYPES[ext] || 'application/octet-stream';

          res.writeHead(200, { 'Content-Type': contentType });
          res.end(data);
        });
      });
    });

    server.listen(PORT, (err) => {
      if (err) return reject(err);
      resolve(server);
    });
  });
}

async function prerender() {
  console.log('Copying index.html to index.temp.html...');
  const indexHtmlPath = path.join(DIST_DIR, 'index.html');
  const tempHtmlPath = path.join(DIST_DIR, 'index.temp.html');
  
  if (!fs.existsSync(indexHtmlPath)) {
    throw new Error(`Build directory or index.html not found at ${indexHtmlPath}. Run 'vite build' first.`);
  }
  
  fs.copyFileSync(indexHtmlPath, tempHtmlPath);

  console.log('Starting local HTTP server...');
  const server = await startServer();
  console.log(`Server running at http://localhost:${PORT}`);

  console.log('Launching headless browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();

  for (const route of ROUTES) {
    console.log(`Prerendering route: ${route}`);
    const url = `http://localhost:${PORT}${route}`;
    await page.goto(url, { waitUntil: 'networkidle0' });

    // Wait for the app to mount (wait for first child element in root)
    await page.waitForSelector('#root > *', { timeout: 5000 }).catch(() => {
      console.warn(`Warning: timeout waiting for '#root > *' on route: ${route}. Proceeding anyway...`);
    });

    // Let any remaining client-side useEffects settle (e.g. SEO metadata updates)
    await new Promise((r) => setTimeout(r, 500));

    const html = await page.content();

    // Determine output path
    let targetFile;
    if (route === '/') {
      targetFile = path.join(DIST_DIR, 'index.html');
    } else {
      const targetDir = path.join(DIST_DIR, route);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      targetFile = path.join(targetDir, 'index.html');
    }

    fs.writeFileSync(targetFile, html, 'utf-8');
    console.log(`Saved pre-rendered content to ${targetFile}`);
  }

  console.log('Closing browser...');
  await browser.close();

  console.log('Stopping server...');
  server.close();

  console.log('Cleaning up temporary files...');
  if (fs.existsSync(tempHtmlPath)) {
    fs.unlinkSync(tempHtmlPath);
  }

  console.log('Prerendering completed successfully!');
}

prerender().catch((err) => {
  console.error('Prerendering failed:', err);
  
  // Cleanup temp file even if failed
  const tempHtmlPath = path.join(DIST_DIR, 'index.temp.html');
  if (fs.existsSync(tempHtmlPath)) {
    fs.unlinkSync(tempHtmlPath);
  }
  process.exit(1);
});
