import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
await page.goto('https://dangthanh.org');
await page.screenshot({ path: 'dangthanh.org.png' });
await browser.close();
