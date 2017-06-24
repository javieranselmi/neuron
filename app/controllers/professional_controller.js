var Professional = require('../models/professional');

exports.getProfessionals = function (req, res, next) {

    return Professional.fetchAll().then(function (sessions) {
        res.status(200).json(sessions)
    })
        .catch(function (err) {
            next(err)
        })
};
