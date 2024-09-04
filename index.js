import puppeteer from 'puppeteer';
import { setTimeout } from 'timers/promises';



async function run() {

  const browser = await puppeteer.launch({
    headless: false,
    });

    const page = await browser.newPage();

    const targetUrl = 'https://www.google.com/';

    while (true) {
      try {
        // Navigate to the target URL
        await page.goto(targetUrl, { waitUntil: 'networkidle0' });
  
        if(page.url().includes('login')) {
          console.log('session is out');
        }else{
          console.log('Page reloaded');
        }
        // Wait for 5 minutes (300,000 milliseconds)
        await setTimeout(300000);
      } catch (error) {
        console.log('Error during page reload:', error);
      }
    }

}

run();