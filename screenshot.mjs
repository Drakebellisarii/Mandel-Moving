// screenshot.mjs — captures a screenshot of the dev site
// Usage: node screenshot.mjs http://localhost:3000 [label]
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] ? `-${process.argv[3]}` : '';
const dir = './temporary screenshots';

if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

// Auto-increment filename
let n = 1;
while (fs.existsSync(path.join(dir, `screenshot-${n}${label}.png`))) n++;
const outPath = path.join(dir, `screenshot-${n}${label}.png`);

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

// Wait for initial render
await new Promise((r) => setTimeout(r, 1500));

// Scroll through the page to trigger IntersectionObserver-based animations
await page.evaluate(async () => {
  await new Promise((resolve) => {
    const distance = 400;
    const delay = 60;
    let scrolled = 0;

    const step = () => {
      window.scrollBy(0, distance);
      scrolled += distance;
      if (scrolled < document.body.scrollHeight + window.innerHeight) {
        setTimeout(step, delay);
      } else {
        // Scroll back to top for the screenshot
        window.scrollTo(0, 0);
        setTimeout(resolve, 600);
      }
    };
    step();
  });
});

// Wait for all animations to settle
await new Promise((r) => setTimeout(r, 1200));

await page.screenshot({ path: outPath, fullPage: true });
await browser.close();

console.log(`Screenshot saved: ${outPath}`);
