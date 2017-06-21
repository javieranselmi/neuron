var express = require('express');
var Router = express.Router();

Router.get('/api/v1/sessions', require('./../controllers/session_controller').getSessions);
Router.post('/api/v1/sessions', require('./../controllers/session_controller').postSession);
//Router.post('/session/:id', require('./../controllers/session_controller').createSession);

exports = module.exports = Router;