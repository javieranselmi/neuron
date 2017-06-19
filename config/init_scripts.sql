INSERT INTO neuron.patients (first_name, last_name, sex, clinical_history_number) VALUES ('juan', 'gomez', 'M', '100');
INSERT INTO neuron.patients (first_name, last_name, sex, clinical_history_number) VALUES ('martin', 'martinez', 'M', '101');
INSERT INTO neuron.patients (first_name, last_name, sex, clinical_history_number) VALUES ('miriam', 'martinez', 'M', '102');

INSERT INTO neuron.professionals (first_name, last_name, professional_number) VALUES ('fernando', 'imeroni', '10000');
INSERT INTO neuron.professionals (first_name, last_name, professional_number) VALUES ('juan', 'house', '10001');
INSERT INTO neuron.professionals (first_name, last_name, professional_number) VALUES ('mariano', 'ferrari', '10002');
INSERT INTO neuron.professionals (first_name, last_name, professional_number) VALUES ('ramon', 'constantini', '10003');
INSERT INTO neuron.professionals (first_name, last_name, professional_number) VALUES ('pedro', 'talenti', '10004');
INSERT INTO neuron.professionals (first_name, last_name, professional_number) VALUES ('juana', 'molina', '10005');

INSERT INTO neuron.services (type, subtype) VALUES ('terapia ocupacional', null);
INSERT INTO neuron.services (type, subtype) VALUES ('tratamiento', 'individual
');
INSERT INTO neuron.services (type, subtype) VALUES ('tratamiento', 'familiar');
INSERT INTO neuron.services (type, subtype) VALUES ('tratamiento', 'grupal');
INSERT INTO neuron.services (type, subtype) VALUES ('psiquiatria', 'consulta');
INSERT INTO neuron.services (type, subtype) VALUES ('psiquiatria', 'control medicinas');
INSERT INTO neuron.services (type, subtype) VALUES ('interconsulta', null);
INSERT INTO neuron.services (type, subtype) VALUES ('supervision', null);
INSERT INTO neuron.services (type, subtype) VALUES ('certificado salud mental', null);
INSERT INTO neuron.services (type, subtype) VALUES ('admision', null);

INSERT INTO neuron.sessions (professional_id, patient_id, date, comment, region, number_of_attendants) VALUES (1, 2, '2017-06-13', 'Se requiere seguimiento', 'Capital', null);
INSERT INTO neuron.sessions (professional_id, patient_id, date, comment, region, number_of_attendants) VALUES (2, 3, '2017-06-02', 'Se hablo de su relacion con la madre', 'Provincia', null);
INSERT INTO neuron.sessions (professional_id, patient_id, date, comment, region, number_of_attendants) VALUES (1, 2, '2017-06-11', null, 'Capital', null);
INSERT INTO neuron.sessions (professional_id, patient_id, date, comment, region, number_of_attendants) VALUES (1, 2, '2017-06-14', null, 'Capital', null);
INSERT INTO neuron.sessions (professional_id, patient_id, date, comment, region, number_of_attendants) VALUES (2, 1, '2017-06-12', null, 'Provincia', null);

INSERT INTO neuron.services_sessions (service_id, session_id) VALUES (4, 2);
INSERT INTO neuron.services_sessions (service_id, session_id) VALUES (3, 2);
INSERT INTO neuron.services_sessions (service_id, session_id) VALUES (1, 2);
INSERT INTO neuron.services_sessions (service_id, session_id) VALUES (2, 7);
INSERT INTO neuron.services_sessions (service_id, session_id) VALUES (4, 4);
INSERT INTO neuron.services_sessions (service_id, session_id) VALUES (3, 5);
INSERT INTO neuron.services_sessions (service_id, session_id) VALUES (4, 5);
INSERT INTO neuron.services_sessions (service_id, session_id) VALUES (2, 6);
INSERT INTO neuron.services_sessions (service_id, session_id) VALUES (1, 7);