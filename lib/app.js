const express = require('express');
const bodyParser = require('body-parser')
const routes = require('./src/routes/routes');

const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static('public'));

app.use('/api/v1/', routes);

app.get('/api/v1/public/spec/app-description-v1.yaml', (req, res) => {
  res.status(200).sendFile('public/spec/app-description-v1.yaml', {root: path.dirname(__dirname)});
});

app.get('/api/v1/', (req, res) => { res.status(200).sendFile('public/docs/index.html', {root: path.dirname(__dirname)}); });

app.use((req, res, next) => {
    res.status(404).send('Resource not found')
});

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Internal server error');
})

app.listen(port);
console.log('app running on port ', port);

