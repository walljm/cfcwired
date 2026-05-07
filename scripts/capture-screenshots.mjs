/**
 * Captures side-by-side comparison screenshots of public vs Rock RMS pages.
 * Run: node scripts/capture-screenshots.mjs
 */
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const outDir = path.join(root, 'compare', 'screenshots');
fs.mkdirSync(outDir, { recursive: true });

const pairs = [
  { name: 'home',              pub: 'https://cfcwired.org/',                                  rock: 'https://rock.cfcwired.org/page/1018' },
  { name: 'about-us',          pub: 'https://cfcwired.org/about-us/',                         rock: 'https://rock.cfcwired.org/about-us' },
  { name: 'statement-of-faith',pub: 'https://cfcwired.org/about-us/statement-of-faith/',     rock: 'https://rock.cfcwired.org/about-us/statement-of-faith' },
  { name: 'meet-the-team',     pub: 'https://cfcwired.org/about-us/meet-the-team/',          rock: 'https://rock.cfcwired.org/about-us/meet-the-team/' },
  { name: 'contact-us',        pub: 'https://cfcwired.org/about-us/contact-us/',             rock: 'https://rock.cfcwired.org/about-us/contact-us/' },
  { name: 'come-visit',        pub: 'https://cfcwired.org/come-visit/',                       rock: 'https://rock.cfcwired.org/come-visit' },
  { name: 'children',          pub: 'https://cfcwired.org/for-my-family/children/',          rock: 'https://rock.cfcwired.org/for-my-family/children/' },
  { name: 'high-school',       pub: 'https://cfcwired.org/for-my-family/high-school/',       rock: 'https://rock.cfcwired.org/for-my-family/high-school' },
  { name: 'middle-school',     pub: 'https://cfcwired.org/for-my-family/middle-school/',     rock: 'https://rock.cfcwired.org/for-my-family/middle-school' },
  { name: 'request-prayer',    pub: 'https://cfcwired.org/request-prayer/',                  rock: 'https://rock.cfcwired.org/request-prayer' },
  { name: 'core-classes',      pub: 'https://cfcwired.org/get-involved/take-a-class/',       rock: 'https://rock.cfcwired.org/get-involved/take-a-class/' },
  { name: 'global-outreach',   pub: 'https://cfcwired.org/get-involved/global/',             rock: 'https://rock.cfcwired.org/get-involved/global-outreach/' },
  { name: 'serve',             pub: 'https://cfcwired.org/get-involved/serve/',              rock: 'https://rock.cfcwired.org/get-involved/serve' },
  { name: 'local-outreach',    pub: 'https://cfcwired.org/get-involved/local-outreach/',     rock: 'https://rock.cfcwired.org/get-involved/local-outreach/' },
  { name: 'living-on-mission', pub: 'https://cfcwired.org/get-involved/living-on-mission/', rock: 'https://rock.cfcwired.org/get-involved/living-on-mission' },
  { name: 'messages',          pub: 'https://cfcwired.org/messages/',                        rock: 'https://rock.cfcwired.org/messages' },
];

async function capture(page, url, filePath, viewport = { width: 1440, height: 900 }) {
  await page.setViewportSize(viewport);
  try {
    await page.goto(url, { waitUntil: 'load', timeout: 20000 });
    // Extra wait for images/lazy content
    await page.waitForTimeout(1500);
  } catch {
    console.warn(`  [warn] load timeout for ${url}, capturing anyway`);
  }
  await page.screenshot({ path: filePath, fullPage: true, type: 'png', scale: 'css' });
}

async function gatherInfo(page) {
  return page.evaluate(() => ({
    scrollH: document.body.scrollHeight,
    title: document.title,
    h1s: [...document.querySelectorAll('h1,h2')].slice(0,5).map(h => h.textContent.trim().substring(0,80)),
    heroH: document.querySelector('.page-hero,.hero-section')?.getBoundingClientRect()?.height ?? 0,
    emptyMain: (document.querySelector('main')?.innerText?.trim().length ?? 0) < 80,
    brokenImgs: [...document.querySelectorAll('img')]
      .filter(i => i.naturalWidth === 0 && i.src && !i.src.startsWith('data:'))
      .map(i => i.src),
    hasOverflow: document.body.scrollWidth > document.documentElement.clientWidth,
  }));
}

const browser = await chromium.launch();
const page = await browser.newPage();

const report = [];

for (const pair of pairs) {
  console.log(`Capturing ${pair.name}...`);

  // Public desktop
  await capture(page, pair.pub, path.join(outDir, `${pair.name}-pub.png`));
  const pubInfo = await gatherInfo(page);

  // Rock desktop
  await capture(page, pair.rock, path.join(outDir, `${pair.name}-rock.png`));
  const rockInfo = await gatherInfo(page);

  // Rock mobile
  await capture(page, pair.rock, path.join(outDir, `${pair.name}-rock-mob.png`), { width: 390, height: 844 });
  const rockMob = await page.evaluate(() => ({
    scrollH: document.body.scrollHeight,
    hasOverflow: document.body.scrollWidth > document.documentElement.clientWidth,
    emptyMain: (document.querySelector('main')?.innerText?.trim().length ?? 0) < 80,
    h1: document.querySelector('h1')?.textContent?.trim().substring(0, 80) ?? 'NONE',
  }));

  const issues = [];
  if (rockInfo.emptyMain) issues.push('EMPTY MAIN');
  if (rockInfo.heroH === 0) issues.push('NO HERO');
  if (rockInfo.brokenImgs.length) issues.push(`BROKEN IMGS: ${rockInfo.brokenImgs.map(s => s.split('/').pop()).join(', ')}`);
  if (rockInfo.hasOverflow) issues.push('DESKTOP OVERFLOW');
  if (rockMob.hasOverflow) issues.push('MOBILE OVERFLOW');
  if (rockMob.emptyMain) issues.push('MOBILE EMPTY');
  const hDiff = Math.abs(rockInfo.scrollH - pubInfo.scrollH);
  if (hDiff > 400) issues.push(`HEIGHT DIFF +${hDiff}px (pub=${pubInfo.scrollH} rock=${rockInfo.scrollH})`);

  report.push({ page: pair.name, issues, pubH1s: pubInfo.h1s, rockH1s: rockInfo.h1s, rockHeroH: rockInfo.heroH, rockMob });
  const status = issues.length ? `⚠️  ${issues.join(' | ')}` : '✅ OK';
  console.log(`  ${status}`);
}

await browser.close();

// Write JSON + text report
fs.writeFileSync(path.join(outDir, 'audit.json'), JSON.stringify(report, null, 2));

const text = report.map(r => {
  const status = r.issues.length ? `⚠️  ${r.issues.join(' | ')}` : '✅ OK';
  return [
    `## ${r.page}: ${status}`,
    `  pub-headings:  ${r.pubH1s.join(' | ')}`,
    `  rock-headings: ${r.rockH1s.join(' | ')}`,
    `  rock heroH=${r.rockHeroH}px  mobile-empty=${r.rockMob.emptyMain}  mobile-h1="${r.rockMob.h1}"`,
  ].join('\n');
}).join('\n\n');

fs.writeFileSync(path.join(outDir, 'audit.txt'), text);
console.log('\n--- AUDIT REPORT ---\n');
console.log(text);
console.log(`\nScreenshots saved to: compare/screenshots/`);
