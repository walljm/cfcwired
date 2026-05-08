import { chromium } from 'playwright';
const out = '/tmp/ms-snap';
const browser = await chromium.launch();
const page = await browser.newPage();
async function snap(url, file, w = 1440) {
  await page.setViewportSize({ width: w, height: 900 });
  try { await page.goto(url, { waitUntil: 'load', timeout: 30000 }); } catch {}
  await page.waitForTimeout(2500);
  await page.evaluate(async () => {
    await new Promise(r => { let y=0; const i=setInterval(()=>{window.scrollTo(0,y); y+=400; if(y>document.body.scrollHeight){clearInterval(i); window.scrollTo(0,0); setTimeout(r,500);} }, 80); });
  });
  await page.waitForTimeout(800);
  await page.screenshot({ path: `${out}/${file}`, fullPage: true });
  console.log(file, 'done');
}
await snap('https://cfcwired.org/for-my-family/middle-school/', 'live-1440.png', 1440);
await snap('https://rock.cfcwired.org/for-my-family/middle-school', 'rock-1440.png', 1440);
await snap('https://cfcwired.org/for-my-family/middle-school/', 'live-768.png', 768);
await snap('https://rock.cfcwired.org/for-my-family/middle-school', 'rock-768.png', 768);
await browser.close();
