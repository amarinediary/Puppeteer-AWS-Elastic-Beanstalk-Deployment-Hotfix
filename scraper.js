/**
* @link https://github.com/puppeteer/puppeteer
* 
* @package puppeteer
*/
let puppeteer = require('puppeteer');

let scraper = async (site) => {
    let browser = await puppeteer.launch({

        /**
         * @see https://github.com/puppeteer/puppeteer/blob/main/docs/api.md#puppeteerlaunchoptions
         */
        headless: true,
        defaultViewport: {
            width: 1920,
            height: 1080
        },

        /**
         * @see https://peter.sh/experiments/chromium-command-line-switches/
         */
        args: [
            '--block-new-web-contents',
            '--disable-modal-animations',
            '--disable-web-security',
            '--disable-smooth-scrolling',
            '--disable-gpu',
            '--disable-2d-canvas-clip-aa',
            '--disable-2d-canvas-image-chromium',
            '--disable-3d-apis',
            '--disable-accelerated-2d-canvas',
            '--disable-accelerated-mjpeg-decode',
            '--disable-accelerated-video-decode',
            '--disable-accelerated-video-encode',
            '--disable-audio-output',
            '--disable-auto-reload',
            '--start-maximized',
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--no-zygote',
            '--no-sandbox-and-elevated',
            '--no-crash-upload',
            '--disable-dev-shm-usage',
            '--no-first-run',
        ],
    }),

        page = await browser.newPage();

    let state = await page.goto(site, {

        /**
         * @see https://github.com/puppeteer/puppeteer/blob/main/docs/api.md#pagegobackoptions
         */
        waitUntil: 'networkidle0',
    });

    state = state.status();

    let url = await page.url(),

        title = await page.title();

    await browser.close();

    return {
        url: url,
        title: title,
        state: state,
    };

}; module.exports = scraper;