'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
    var dbActions = [];

    dbActions.push(db.createTable('sessions', {
        id: {type: 'int', primaryKey: true, autoIncrement: true},
        professional_id: 'int',
        patient_id: 'int',
        date: {type: 'date'},
        comment: {type: 'string'},
        region: {type: 'string'},
        number_of_attendants: {type: 'string'}
    }));

    dbActions.push(db.createTable('services', {
        id: {type: 'int', primaryKey: true, autoIncrement: true},
        type: {type: 'string'},
        subtype: {type: 'string'}
    }));

    dbActions.push(db.createTable('services_sessions', {
        id: {type: 'int', primaryKey: true, autoIncrement: true},
        service_id: {type: 'int'},
        session_id: {type: 'int'}
    }));

    dbActions.push(db.createTable('professionals', {
        id: {type: 'int', primaryKey: true, autoIncrement: true},
        first_name: {type: 'string'},
        last_name: {type: 'string'},
        professional_number: {type: 'string'}
    }));

    dbActions.push(db.createTable('patients', {
        id: {type: 'int', primaryKey: true, autoIncrement: true},
        first_name: {type: 'string'},
        last_name: {type: 'string'},
        sex: {type: 'string'},
        clinical_history_number: {type: 'string'}
    }));

    return Promise.all(dbActions);
};

exports.down = function(db) {
    return Promise.all([
        db.dropTable('sessions'),
        db.dropTable('services'),
        db.dropTable('services_sessions'),
        db.dropTable('professionals'),
        db.dropTable('patients')
    ]);
};

exports._meta = {
  "version": 1
};
