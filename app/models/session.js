var bookshelf = require('../bookshelf');
var Service = require('./service');
var Patient = require('./patient');
var Professional = require('./professional');

var Session = bookshelf.Model.extend({
    tableName: 'sessions',
    services: function() {
        return this.belongsToMany(Service);
    },
    professional: function() {
        return this.belongsTo(Professional);
    },
    patient: function() {
        return this.belongsTo(Patient);
    }
});

module.exports = Session;