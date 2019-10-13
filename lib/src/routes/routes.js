import { Router } from 'express';
import Quote from '../controllers/Quote'


const path = require('path');
const routes = Router();

routes.get('/quotes', Quote.getAllQuotes);
routes.get('/quote', Quote.getRandomQuote);
routes.get('/quotes/:quoteId', Quote.getSpecificQuote);

export default routes;
