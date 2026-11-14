# Exercício 4 — banco não relacional (consultas avançadas)

## Objetivo
Manipular e filtrar estruturas aninhadas e arrays em banco de dados NoSQL (MongoDB), utilizando `updateOne` com `$set` e operadores de busca em coleções.

## O que foi desenvolvido
1. Operação de `updateOne()` adicionando uma lista de subdocumentos (`comentarios`) em um post existente.
2. Consulta `find({ tags: "nosql" })` demonstrando a busca indexada em arrays.
3. Consulta `find({ autor: "Leo" })` aplicando filtro por campo exato.
4. Consulta verificando a presença de comentários aninhados.

## Como executar
- **No mongodb compass:** Conecte-se com a URI oficial (`mongodb://orion_admin:orion_admin_pass@localhost:27017/`), selecione o banco `orion_db` e a coleção `posts`.
- **No terminal (mongosh via docker):**
  ```bash
  docker exec -it orion_mongo_db mongosh -u orion_admin -p orion_admin_pass --authenticationDatabase admin
  ```
  E execute as instruções do script [exercicio-4.js](./exercicio-4.js).

## Evidências da entrega (prints)
* **`prints/exercicio-4.1.jpg`:** Consulta `find({ tags: "nosql" })` filtrando elementos dentro de um array.
* **`prints/exercicio-4.2.jpg`:** Consulta `find({ autor: "Leo" })` aplicando filtro por campo específico.
* **`prints/exercicio-4.3.jpg`:** Execução do comando `updateOne` no `_MONGOSH_` adicionando a lista de subdocumentos.
* **`prints/exercicio-4.4.jpg`:** Visualização do documento completo expandido com o array de comentários aninhados.
