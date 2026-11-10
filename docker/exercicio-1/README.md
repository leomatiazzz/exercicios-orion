# Exercício 1 — Dockerfile + Compose: “Hello Container”

## Objetivo
Aprender a criar uma imagem customizada a partir de um Dockerfile e orquestrar com o docker-compose.

## Como executar

1. Certifique-se de estar na pasta do exercício:
   ```bash
   cd docker/exercicio-1
   ```

2. Suba o container com o Docker Compose:
   ```bash
   docker compose up --build
   ```

3. Acesse a aplicação no seu navegador ou via curl:
   ```bash
   curl http://localhost:3000
   ```
   **Resposta esperada:** `Hello from Docker!`

4. Para parar a aplicação:
   ```bash
   docker compose down
   ```
