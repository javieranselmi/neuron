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

    dbActions.push(db.addForeignKey('sessions', 'professionals', 'sessions_professionals_foreign_key',
        { 'professional_id': 'id' },
        { onUpdate: 'RESTRICT' }));

    dbActions.push(db.addForeignKey('sessions', 'patients', 'sessions_patients_foreign_key',
        { 'patient_id': 'id' },
        { onUpdate: 'RESTRICT' }));

    dbActions.push(db.addForeignKey('sessions_services', 'sessions', 'sessions_services_sessions_foreign_key',
        { 'session_id': 'id' },
        { onUpdate: 'RESTRICT' }));

    dbActions.push(db.addForeignKey('sessions_services', 'services', 'sessions_services_services_foreign_key',
        { 'service_id': 'id' },
        { onUpdate: 'RESTRICT' }));


  return null;
};

exports.down = function(db) {
    return Promise.all([
        db.dropTable('sessions_professionals_foreign_key'),
        db.dropTable('sessions_patients_foreign_key'),
        db.dropTable('sessions_services'),
        db.dropTable('sessions_services_sessions_foreign_key'),
    ]);
};

exports._meta = {
  "version": 1
};
