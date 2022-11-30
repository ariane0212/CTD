-- DDL ------------
-- Ariane Maria dos Santos Silva - Turma 03
/* 
Criação de uma banco de dados de um hospital, onde há registro de pacientes, medicos, enfermeiros e seus endereços.
Todas as tabelas apresentam relacionamentos muitos para muitos (N:N), há a necessidade de uma tabela intermediária para relacionar as outras duas tabelas, uma vez que os pacientes de uma tabela se relacionam a vários endereços de outra tabela.
*/

-- Criação do Banco de Dados 
CREATE DATABASE IF NOT EXISTS hospital;
USE hospital;

-- Criação das tabelas com chaves primárias e estrangeiras
CREATE TABLE pacientes(
paciente_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
paciente_nome VARCHAR(150) NOT NULL,
paciente_cpf CHAR(14) NOT NULL,
paciente_data_nascimento DATE,
paciente_genero CHAR(1),
paciente_telefone CHAR(14)
);

CREATE TABLE endereco_pacientes(
endereco_paciente_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
cep_paciente_id CHAR(9) NOT NULL,
cidade_paciente_id VARCHAR(30),
bairro_paciente_id VARCHAR(30),
	FOREIGN KEY (endereco_paciente_id) REFERENCES pacientes (paciente_id)
);

CREATE TABLE especialidades(
especialidade_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
cod_id CHAR(5),
especialidade_nome VARCHAR(35)
);

CREATE TABLE medicos(
medico_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
medico_crm CHAR(10) NOT NULL UNIQUE,
medico_nome VARCHAR(150) NOT NULL,
medico_cpf CHAR(14) NOT NULL,
medico_data_nascimento DATE,
medico_telefone CHAR(14),
medico_especialidade VARCHAR(35) NOT NULL,
	FOREIGN KEY (medico_id)	REFERENCES especialidades (especialidade_id)
);

CREATE TABLE hospitais(
hospital_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
hospital_cnpj VARCHAR(18) NOT NULL UNIQUE,
hospital_razao_social VARCHAR(45) NOT NULL,
hospital_telefone CHAR(14)
);

CREATE TABLE endereco_hospitais(
endereco_hospital_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
cep_hospital_id CHAR(9) NOT NULL,
cidade_hospital_id VARCHAR(30),
bairro_hospital_id VARCHAR(30),
FOREIGN KEY (endereco_hospital_id) REFERENCES hospitais (hospital_id)
);

CREATE TABLE enfermagens(
enfermagem_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
enfermagem_coren CHAR(6),
enfermagem_nome VARCHAR(150),
enfermagem_cpf CHAR(14),
enfermagem_data_nascimento DATE,
enfermagem_telefone CHAR(14)
);

