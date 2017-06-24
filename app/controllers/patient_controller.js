var Patient = require('../models/patient');

exports.getPatients = function (req, res, next) {

    return Patient.fetchAll().then(function (sessions) {
        res.status(200).json(sessions)
    })
        .catch(function (err) {
            next(err)
        })
};
