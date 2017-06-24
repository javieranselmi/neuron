var express = require('express');
var Router = express.Router();

Router.get('/api/v1/sessions', require('./../controllers/session_controller').getSessions);
Router.post('/api/v1/sessions', require('./../controllers/session_controller').postSession);

Router.get('/api/v1/professionals', require('./../controllers/professional_controller').getProfessionals);
Router.get('/api/v1/patients', require('./../controllers/patient_controller').getPatients);
Router.get('/api/v1/services', require('./../controllers/service_controller').getServices);

exports = module.exports = Router;