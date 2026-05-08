import { chromium } from 'playwright';

const widths = [1440, 1024, 768, 390];
const browser = await chromium.launch();
for (const w of widths) {
    const ctx = await browser.newContext({ viewport: { width: w, height: 900 } });
    const page = await ctx.newPage();
    await page.goto('http://localhost:3000/come-visit/', { waitUntil: 'networkidle' });
    await page.screenshot({ path: `come-visit-local-${w}.png`, fullPage: true });
    await ctx.close();
    console.log(`saved come-visit-local-${w}.png`);
}
await browser.close();
