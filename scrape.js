const puppeteer = require('puppeteer');
const fs = require('fs');

const url = process.env.SCRAPE_URL;

if (!url) {
  console.error("❌ SCRAPE_URL environment variable not set.");
  process.exit(1);
}


(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: "new",
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });

    const data = await page.evaluate(() => {
      return {
        title: document.title,
        heading: document.querySelector('h1')?.innerText || 'No <h1> found',
        description: document.querySelector('meta[name="description"]')?.content || 'No description',
      };
    });

    fs.writeFileSync('scraped_data.json', JSON.stringify(data, null, 2));
    console.log("✅ Data scraped and saved to scraped_data.json");

    await browser.close();
  } catch (error) {
    console.error("❌ Scraping failed:", error.message);
  }
})();
