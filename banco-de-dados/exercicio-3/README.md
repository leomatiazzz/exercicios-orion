# Exercício 3 — banco não relacional (CRUD básico)

## Objetivo
Compreender a estrutura de documentos em bancos de dados NoSQL (MongoDB) e demonstrar na prática o conceito de **schema flexível**.

## O que foi desenvolvido
1. Criação da coleção `posts`.
2. Inserção do primeiro documento contendo `titulo`, `autor` e `conteudo`.
3. Inserção do segundo documento com os mesmos campos mais o campo adicional `tags` (array de strings), comprovando que o banco aceita estruturas heterogêneas sem necessidade de alterar o esquema da tabela.
4. Consulta `find()` retornando os dois documentos.

## Como executar
- **No dbeaver:** Abra a conexão do MongoDB, abra um novo editor SQL/Script e execute o arquivo [exercicio-3.js](./exercicio-3.js).
- **No terminal (mongosh via docker):**
  ```bash
  docker exec -it orion_mongo_db mongosh -u orion_admin -p orion_admin_pass --authenticationDatabase admin
  ```
- Salve os prints do resultado da consulta `find()` dentro da pasta `prints/`.
