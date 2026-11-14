# Exercício 4 — banco não relacional (consultas avançadas)

## Objetivo
Manipular e filtrar estruturas aninhadas e arrays em banco de dados NoSQL (MongoDB), utilizando `updateOne` com `$set` e operadores de busca em coleções.

## O que foi desenvolvido
1. Operação de `updateOne()` adicionando uma lista de subdocumentos (`comentarios`) em um post existente.
2. Consulta `find({ tags: "nosql" })` demonstrando a busca indexada em arrays.
3. Consulta `find({ autor: "Leo" })` aplicando filtro por campo exato.
4. Consulta verificando a presença de comentários aninhados.

## Como executar
- **No dbeaver:** Abra a conexão do MongoDB, abra um novo editor SQL/Script e execute o arquivo [exercicio-4.js](./exercicio-4.js).
- **No terminal (mongosh via docker):**
  ```bash
  docker exec -it orion_mongo_db mongosh -u orion_admin -p orion_admin_pass --authenticationDatabase admin
  ```
- Salve os prints do resultado das consultas dentro da pasta `prints/`.

