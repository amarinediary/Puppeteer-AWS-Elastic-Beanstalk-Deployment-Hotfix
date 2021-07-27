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
    PORT = process.env.PORT;

app = express();

/**
 * Methods
 * 
 * @see https://expressjs.com/en/api.html#express.json
 */
app.use(express.json());

/**
 * Serving static files in Express
 * 
 * @see https://expressjs.com/en/starter/static-files.html
 */
app.use(express.static('public'));

/**
 * Routing
 * 
 * @see https://expressjs.com/en/guide/routing.html
 */
app.post(`/form`, (request, response) => {
    site = request.body.input;
    scraper(site)
    .then(results => {
        response.status(200).json(results);
    });
})

app.listen(PORT);