-- DML --------------------

/* 
Contexto para CRUD: 
Cinco pacientes com dados diferentes foram inseridos no banco de dados (INSERT/CREATE).
Descobriu-se que uma das entradas são, na verdade, da mãe de um paciente internado (cod = 5), devido, à confusão com os cpf. Dessa forma, essas entradas foram atualizadas (UPDATE/UPDATE).
A segunda entrada estava repetida, sendo excluída da tabela pacientes (DELETE/DELETE).
Assim, pedimos ao banco de dados retornar a tabela de pacientes e, posteriormente, os dados dos pacientes que apresentavam várias entradas no banco de dados ('Julia Santos') a fim de verificar se há replicação de dados (SELECT/READ).
Por fim, fizemos a seleção envolvendo duas tabelas para encontrar o registro dos pacientes (INNER JOIN).
*/

USE hospital;

-- Inserção de dados em uma das tabelas (INSERT/CREATE)
INSERT INTO pacientes (paciente_id, paciente_nome, paciente_cpf, paciente_data_nascimento, paciente_genero, paciente_telefone)
VALUES (DEFAULT, 'Julia Santos', '001.254.222-93', '2004-02-14', 'F', '(61)12345-6689');

INSERT INTO pacientes (paciente_id, paciente_nome, paciente_cpf, paciente_data_nascimento, paciente_genero, paciente_telefone)
VALUES (DEFAULT, 'Antonio Silva', '042.411.222-36', '2014-10-30', 'M', '(61)12345-6788');

INSERT INTO pacientes (paciente_id, paciente_nome, paciente_cpf, paciente_data_nascimento, paciente_genero, paciente_telefone)
VALUES (DEFAULT, 'Pedro Sousa', '020.141.222-23', '1989-08-25', 'M', '(61)12345-4589');

INSERT INTO pacientes (paciente_id, paciente_nome, paciente_cpf, paciente_data_nascimento, paciente_genero, paciente_telefone)
VALUES (DEFAULT, 'Gabriela Tamares', '010.253.252-33', '1987-01-16', 'F', '(61)12345-6589');

INSERT INTO pacientes (paciente_id, paciente_nome, paciente_cpf, paciente_data_nascimento, paciente_genero, paciente_telefone)
VALUES (DEFAULT, 'Claudia Raia', '010.562.001-33', '1987-01-05', 'F', '(61)16525-6189');

-- Atualização de dados em uma das tabelas (UPDATE/UPDATE)
UPDATE  pacientes 
SET paciente_nome = 'Claudia Raia',
	paciente_cpf = '010.555.252-33', 
	paciente_data_nascimento = '1987-01-16',
	paciente_genero = 'F',
	paciente_telefone = '(61)16525-6189'
WHERE paciente_id = 5;

-- Exclusão de dados em uma das tabelas (DELETE/DELETE)
DELETE FROM pacientes
WHERE paciente_id = 2;

-- Seleção de dados de uma das tabelas (SELECT/READ)
SELECT c.paciente_id, c.paciente_nome, c.paciente_cpf
FROM pacientes c;

SELECT * FROM pacientes
WHERE paciente_nome = 'Julia Santos' AND paciente_cpf = '001.254.222-93'; 

-- Consulta a múltiplas tabelas (INNER JOIN)
SELECT paciente_nome, paciente_data_nascimento
FROM hospitais
INNER JOIN pacientes ON paciente_nome = paciente_nome;