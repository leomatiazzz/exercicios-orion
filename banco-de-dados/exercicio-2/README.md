# Exercício 2 — banco relacional (JOINs e filtros)

## Objetivo
Consultar dados de múltiplas tabelas relacionais através de `INNER JOIN`, aplicar condições com `WHERE`, realizar atualização de dados com `UPDATE` e identificar dados órfãos com `LEFT JOIN`.

## O que foi desenvolvido
1. Consulta com `INNER JOIN` trazendo alunos e seus respectivos cursos em uma visualização unificada.
2. Consulta com filtro `WHERE` para listar apenas alunos matriculados em "Desenvolvimento Web".
3. Comando `UPDATE` alterando o curso da aluna "Maria Santos" para "Ciência de Dados", com consulta subsequente para validar a modificação.
4. Consulta avançada utilizando `LEFT JOIN` e `IS NULL` para listar cursos que não possuem nenhum aluno associado.

## Como executar no dbeaver
1. Conecte-se ao banco PostgreSQL (`orion_db`).
2. Abra o arquivo [exercicio-2.sql](./exercicio-2.sql).
3. Execute cada consulta em sequência.
4. Salve os prints do resultado das consultas dentro da pasta `prints/`.

