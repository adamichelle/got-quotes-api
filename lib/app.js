import express from 'express';
import bodyParser from 'body-parser';
import routes from './src/routes/routes';

const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1/', routes);
app.use('/', express.static('public'))

app.get('/api/v1/', (req, res) => { res.status(200).sendFile('public/docs/index.html', {root: path.dirname(__dirname)}); });

app.listen(port);

console.log('app running on port ', port);

export default app;
