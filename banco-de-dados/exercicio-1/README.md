# Exercício 1 — banco relacional (SQL básico)

## Objetivo
Aprender os comandos básicos de SQL para definição de dados (DDL - `CREATE TABLE`) e manipulação de dados (DML - `INSERT`, `SELECT`).

## O que foi desenvolvido
1. Criação da tabela `cursos` com chave primária numérica e autoincremento (`SERIAL`).
2. Criação da tabela `alunos` com chave primária, restrição `UNIQUE` no e-mail e chave estrangeira (`FOREIGN KEY`) vinculada a `cursos(id)`.
3. Inserção de cursos de teste.
4. Inserção de alunos vinculados aos cursos existentes.
5. Consulta de verificação com `SELECT * FROM alunos`.
6. Teste de violação de chave estrangeira com `curso_id` inexistente.

## Como executar no dbeaver
1. Conecte-se ao banco PostgreSQL (`orion_db`).
2. Abra o script [exercicio-1.sql](./exercicio-1.sql).
3. Execute as instruções na ordem indicada.
4. Salve os prints do resultado das consultas dentro da pasta `prints/`.

