# Exercício 2 — Compose com API + Banco de Dados

## Objetivo
Aprender a conectar múltiplos containers (API + DB) usando docker-compose, rede interna e variáveis de ambiente sensíveis via `.env`.

## Como executar

1. Certifique-se de estar na pasta do exercício:
   ```bash
   cd docker/exercicio-2
   ```

2. Verifique se o arquivo `.env` existe (copie de `.env.example` se necessário):
   ```bash
   cp .env.example .env
   ```

3. Suba a stack com o Docker Compose:
   ```bash
   docker compose up --build
   ```

4. Testar a conexão e comunicação entre API e PostgreSQL:
   - **Verificar status de saúde:**
     ```bash
     curl http://localhost:3000/health
     ```
     *Resposta esperada:* `{"status":"ok","database":"connected"}`

   - **Inserir um novo dado no banco:**
     ```bash
     curl -X POST http://localhost:3000/items -H "Content-Type: application/json" -d "{\"name\":\"Primeiro registro\"}"
     ```

   - **Consultar os registros salvos:**
     ```bash
     curl http://localhost:3000/items
     ```

5. **Testar persistência do volume:**
   - Pare os containers:
     ```bash
     docker compose down
     ```
   - Suba novamente:
     ```bash
     docker compose up -d
     ```
   - Faça novamente o `curl http://localhost:3000/items`. Os dados continuam salvos no volume nomeado `postgres_data`.
