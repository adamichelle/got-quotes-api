'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _routes = require('./src/routes/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = require('path');

var app = (0, _express2.default)();
var port = process.env.PORT || 3000;
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

app.use('/api/v1/', _routes2.default);
app.use('/', _express2.default.static('public'));

app.get('/api/v1/', function (req, res) {
  res.status(200).sendFile('public/docs/index.html', { root: path.dirname(__dirname) });
});

app.listen(port);

console.log('app running on port ', port);

exports.default = app;