'use strict';

require('dotenv').config();

const join = require('path').join;
const express = require('express');
const cors = require('./app/middlewares/cors');
var bodyParser = require('body-parser');
var errorHandler = require('./app/middlewares/error-handler');
//let api = require('bookshelf-api')({
//    path: './app/models'
//});

const models = join(__dirname, 'app/models');
const port = process.env.PORT || 3000;

const app = express();
const Routes = require('./app/routes');

app.use(bodyParser.json({ type: 'application/json' }));
app.use(cors);
app.use(express.static('public'));
app.use(Routes);
//app.use('/api/v2', api);
app.use(errorHandler);

app.listen(3000, function () { console.log('Server listening on port: ' + port) });