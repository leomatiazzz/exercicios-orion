# Exercício 3 — banco não relacional (CRUD básico)

## Objetivo
Compreender a estrutura de documentos em bancos de dados NoSQL (MongoDB) e demonstrar na prática o conceito de **schema flexível**.

## O que foi desenvolvido
1. Criação da coleção `posts`.
2. Inserção do primeiro documento contendo `titulo`, `autor` e `conteudo`.
3. Inserção do segundo documento com os mesmos campos mais o campo adicional `tags` (array de strings), comprovando que o banco aceita estruturas heterogêneas na mesma coleção.
4. Consulta `find()` retornando os dois documentos.

## Como executar
- **No mongodb compass:** Conecte-se com a URI oficial (`mongodb://orion_admin:orion_admin_pass@localhost:27017/`), selecione o banco `orion_db` e a coleção `posts`.
- **No terminal (mongosh via docker):**
  ```bash
  docker exec -it orion_mongo_db mongosh -u orion_admin -p orion_admin_pass --authenticationDatabase admin
  ```
  E execute as instruções do script [exercicio-3.js](./exercicio-3.js).

## Evidências da entrega (prints)
* **`prints/exercicio-3.jpg`:** Exibição da coleção `posts` no MongoDB Compass listando ambos os documentos lado a lado, comprovando o schema flexível através do campo `tags`.
