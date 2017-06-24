var Session = require('../models/session');
var Service = require('../models/service');

exports.getSessions = function (req, res, next) {

    return Session.fetchAll({withRelated: ['professional', 'patient', 'services']}).then(function (sessions) {
        res.status(200).json(sessions)
    })
        .catch(function (err) {
            next(err)
        })
};


exports.postSession = function (req, res, next) {

    var session = req.body;
    var relatedServices = session.services;
    delete session.services;

    return Session.forge(session).save().tap(function (session) {

        promises = [];
        relatedServices.forEach(function(service) {
            promises.push(Service.forge({id: service.id}).fetch().then(function(service) {
              return session.services().attach([service]);
            }));
        });
        return Promise.all(promises);

    }).then(function (result) {
        res.status(200).json(result);
    }).catch(function (err) {
            next(err)
    })
}
;