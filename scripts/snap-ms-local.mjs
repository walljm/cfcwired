import { chromium } from 'playwright';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const root = 'src';
const types = { '.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.svg':'image/svg+xml','.woff':'font/woff','.woff2':'font/woff2','.ttf':'font/ttf' };
const server = http.createServer((req,res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p.endsWith('/')) p += 'index.html';
  const fp = path.join(root, p);
  fs.readFile(fp, (err, data) => {
    if (err) { res.statusCode = 404; res.end('not found'); return; }
    res.setHeader('content-type', types[path.extname(fp)] || 'application/octet-stream');
    res.end(data);
  });
});
await new Promise(r => server.listen(3500, r));
const browser = await chromium.launch();
const page = await browser.newPage();
async function snap(url, file, w=1440){
  await page.setViewportSize({ width: w, height: 900 });
  await page.goto(url, { waitUntil: 'load' });
  await page.waitForTimeout(800);
  await page.evaluate(async () => { await new Promise(r => { let y=0; const i=setInterval(()=>{ window.scrollTo(0,y); y+=400; if(y>document.body.scrollHeight){clearInterval(i); window.scrollTo(0,0); setTimeout(r,400);} }, 50); }); });
  await page.screenshot({ path: `/tmp/ms-snap/${file}`, fullPage: true });
  console.log(file, 'done');
}
await snap('http://localhost:3500/for-my-family/middle-school.html', 'local-1440.png', 1440);
await snap('http://localhost:3500/for-my-family/middle-school.html', 'local-768.png', 768);
await browser.close();
server.close();
