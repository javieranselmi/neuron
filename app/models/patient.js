var bookshelf = require('../bookshelf');

var Patient = bookshelf.Model.extend({
    tableName: 'patients',
});


module.exports = Patient;