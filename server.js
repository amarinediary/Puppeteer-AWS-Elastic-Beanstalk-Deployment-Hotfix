let scraper = require(`./scraper.js`);
let express = require(`express`);

app = express();
app.use(express.json());
app.use(express.static('public'));

app.post(`/form`, (request, response) => {
    site = request.body.input;
    scraper(site)
    .then(results => {
        response.status(200).json(results);
    });
});

app.listen(process.env.PORT);