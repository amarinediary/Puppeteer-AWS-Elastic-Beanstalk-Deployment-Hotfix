let puppeteer = require('puppeteer');

let scraper = async (site) => {
    let browser = await puppeteer.launch();
    let page = await browser.newPage();
    let state = await page.goto(site, {
        waitUntil: 'networkidle0',
    });

    state = state.status();

    let url = page.url();
    let title = await page.title();

    await browser.close();

    return {
        url: url,
        title: title,
        state: state,
    };

}; module.exports = scraper;