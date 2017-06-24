var Service = require('../models/service');

exports.getServices = function (req, res, next) {

    return Service.fetchAll().then(function (services) {
        res.status(200).json(services)
    })
        .catch(function (err) {
            next(err)
        })
};
