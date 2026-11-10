# 🚀 Desafio extra — aplicação completa com docker compose

## Objetivo
Desenvolver e orquestrar uma aplicação completa composta por **3 serviços**:
1. **API (backend)**: Node.js com Express e Dockerfile customizado.
2. **Banco de dados**: PostgreSQL com volume persistente e verificação de saúde (`healthcheck`).
3. **Interface de administração**: Adminer web para visualizar e interagir com os dados via navegador.

---

## 🏗️ Estrutura do projeto
```text
exercicio-extra/
├── api/
│   ├── Dockerfile
│   ├── package.json
│   └── src/
│       └── index.js
│   └── .dockerignore
├── docker-compose.yml
├── .env
├── .env.example
└── README.md
```

---

## ⚙️ Como executar

1. Navegue até a pasta do desafio:
   ```bash
   cd docker/exercicio-extra
   ```

2. Certifique-se de que o arquivo `.env` está presente (ele já foi criado, mas você pode personalizá-lo):
   ```bash
   cp .env.example .env
   ```

3. Suba todos os serviços em segundo plano:
   ```bash
   docker compose up --build -d
   ```

4. Verifique o status dos containers:
   ```bash
   docker compose ps
   ```

---

## 🧪 Como testar a aplicação

### 1. Testar rota `/health`
```bash
curl http://localhost:3000/health
```
**Resposta esperada:** `{"status":"ok"}`

### 2. Listar usuários
```bash
curl http://localhost:3000/users
```

### 3. Cadastrar novo usuário
```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Dev Orion", "email": "dev@orion.dev"}'
```

### 4. Acessar interface de administração web (Adminer)
Abra no seu navegador: **[http://localhost:8080](http://localhost:8080)**

Preencha os dados de login:
- **Sistema:** `PostgreSQL`
- **Servidor:** `db`
- **Usuário:** `postgres`
- **Senha:** `postgres123` (ou a senha definida no `.env`)
- **Base de dados:** `extra_db`

Na interface do Adminer você poderá visualizar as tabelas, ver os usuários criados pela API, criar novos registros e rodar queries SQL diretamente pela web!

---

## 🛑 Como parar a stack

```bash
docker compose down
```

Para remover também os volumes persistentes:
```bash
docker compose down -v
```
