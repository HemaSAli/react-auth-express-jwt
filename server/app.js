const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const controllers = require('./controllers');

app.disable('x-powered-by');

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/v1', controllers);
app.use(express.static(path.join(__dirname, 'client', 'build')));

module.exports = app;
