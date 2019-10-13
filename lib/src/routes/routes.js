import { Router } from 'express';
import Quote from '../controllers/Quote'


const path = require('path');
const routes = Router();

routes.get('/quotes', Quote.getAllQuotes);
routes.get('/quote', Quote.getRandomQuote);

export default routes;
