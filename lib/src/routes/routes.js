const { Router } = require('express');
const Quote =  require('../controllers/Quote');


const routes = Router();

routes.get('/quotes', Quote.getAllQuotes);
routes.get('/quote', Quote.getRandomQuote);
routes.get('/quotes/:quoteId', Quote.getSpecificQuote);

module.exports = routes;
