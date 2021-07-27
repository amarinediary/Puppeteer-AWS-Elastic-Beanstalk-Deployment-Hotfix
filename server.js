let scraper = require(`./scraper.js`);

/**
 * @link https://github.com/expressjs/express
 * 
 * @package express
 */
let express = require(`express`),

    /**
     * @see https://stackoverflow.com/a/18864718/3645650
     */
    PORT = process.env.PORT || 8081;

app = express();

app.use(express.json());

app.use(express.static('public'));

app.post(`/form`, (request, response) => {
    site = request.body.input;
    scraper(site)
    .then(results => {
        response.status(200).json(results);
    });
})

app.listen(PORT);