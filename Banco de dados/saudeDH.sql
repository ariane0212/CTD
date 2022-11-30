CREATE DATABASE saude_dh;
use saude_dh;

CREATE TABLE pacientes(
paciente_id int not null auto_increment primary key,
paciente_idsaude int,
paciente_nome varchar(50),
paciente_sobrenome varchar(100)
);

CREATE TABLE especialidades (
especialidade_id int not null auto_increment primary key,
especialidade_nome varchar(100)
);

CREATE TABLE medicos(
medico_id int not null auto_increment primary key,
medico_nome varchar(50),
medico_sobrenome varchar(100),
medico_especialidade int,
	foreign key (medico_especialidade)
	REFERENCES especialidades (especialidade_id)
);

CREATE TABLE consultas(
consulta_id int not null auto_increment primary key,
paciente_id int,
medico_id int,
data_consulta date,
hora_consulta time,
	foreign key (paciente_id)
    references pacientes (paciente_id),
    foreign key (medico_id)
    references medicos (medico_id)
);

INSERT INTO pacientes(paciente_idsaude,paciente_nome,paciente_sobrenome)
VALUES (203402, 'Julio', 'Santos'),
(34356, 'Solange', 'Couto'),
(435676, 'Eustaquio', 'Figuereiro Souza'),
(6567894, 'Silvano', 'Silva Lopes'),
(987568, 'João Lucas', 'Souza Costa');

SELECT * FROM pacientes;