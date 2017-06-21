var Session = require('../models/session');

exports.getSessions = function (req, res, next) {

    return Session.fetchAll({withRelated: ['professional','patient','services']}).then(function (sessions) {
        res.status(200).json(sessions)
    })
        .catch(function (err) {
            next(err)
        })
};


exports.postSession = function (req, res, next) {

    return Session.forge( req.body ).save().then(function (result) {
        res.status(200).json(result)
    })
        .catch(function (err) {
            next(err)
        })
};