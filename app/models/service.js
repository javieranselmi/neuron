var bookshelf = require('../bookshelf');
var Session = require('./session');

var Service = bookshelf.Model.extend({
    tableName: 'services',
    sessions: function() {
        return this.belongsToMany(Session);
    },
});

module.exports = Service;