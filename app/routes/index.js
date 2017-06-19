var express = require('express');
var Router = express.Router();

Router.get('/sessions', require('./../controllers/session_controller').getSessions);
//Router.post('/session/:id', require('./../controllers/session_controller').createSession);

exports = module.exports = Router;