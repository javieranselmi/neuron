/**
 * Created by javieranselmi on 1/11/17.
 */
var dbConfig = {
    client: 'mysql',
    debug: false,
    connection: {
        host     : 'neuron.c7cblth0trpq.us-east-1.rds.amazonaws.com',
        user     : 'neuron',
        password : 'zapata12',
        database : 'neuron',
        charset   : 'utf8',
    } //TODO ADD to .env
};
module.exports = require('knex')(dbConfig);
