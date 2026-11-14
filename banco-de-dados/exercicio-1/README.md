# Exercício 1 — banco relacional (SQL básico)

## Objetivo
Aprender os comandos básicos de SQL para definição de dados (DDL - `CREATE TABLE`) e manipulação de dados (DML - `INSERT`, `SELECT`) com garantia de integridade referencial através de chave estrangeira (`FOREIGN KEY`).

## O que foi desenvolvido
1. Criação da tabela `cursos` com chave primária numérica (`SERIAL PRIMARY KEY`).
2. Criação da tabela `alunos` com chave primária, e-mail único (`UNIQUE`) e chave estrangeira (`FOREIGN KEY (curso_id) REFERENCES cursos(id)`).
3. Inserção de cursos de teste (`Desenvolvimento Web`, `Ciência de Dados`, `Inteligência Artificial`).
4. Inserção de alunos vinculados aos cursos existentes.
5. Consulta de verificação com `SELECT * FROM alunos`.
6. Teste de violação de integridade referencial com inserção de aluno com `curso_id = 999` inexistente.

## Como executar no dbeaver
1. Conecte-se ao banco PostgreSQL (`orion_db`).
2. Abra e execute o script [exercicio-1.sql](./exercicio-1.sql).

## Evidências da entrega (prints)
* **`prints/exercicio-1.jpg`:** Exibição da tabela `alunos` populada e validada via `SELECT * FROM alunos`.
* **`prints/exercicio-1-fk.jpg`:** Comprovação da restrição de chave estrangeira, exibindo a mensagem de erro do PostgreSQL ao tentar inserir `curso_id = 999` (`violates foreign key constraint "fk_aluno_curso"`).
