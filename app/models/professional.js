var bookshelf = require('../bookshelf');

var Professional = bookshelf.Model.extend({
    tableName: 'professionals',
});


module.exports = Professional;