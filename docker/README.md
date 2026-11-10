# Módulo Docker — Orion Bootcamp (New Rizon)

Este diretório contém a resolução de todos os exercícios do módulo de Docker:

```text
docker/
├── Docker.pdf             # Especificação oficial dos exercícios
├── exercicio-1/           # Exercício 1 — Dockerfile + Compose: "Hello Container"
├── exercicio-2/           # Exercício 2 — Compose com API + Banco de Dados
├── exercicio-3/           # Exercício 3 — Boas Práticas + Múltiplos Ambientes (Dev & Prod)
└── exercicio-extra/       # Desafio Extra — Aplicação Completa com Docker Compose (API + Postgres + Adminer)
```

---

## 📋 Resumo dos Exercícios

### [Exercício 1 — Dockerfile + Compose: "Hello Container"](./exercicio-1/)
- **Objetivo:** Criar imagem customizada a partir de Dockerfile e orquestrar com docker-compose.
- **Serviço:** Node.js Alpine expondo porta `3000:3000` e retornando `"Hello from Docker!"`.

### [Exercício 2 — Compose com API + Banco de Dados](./exercicio-2/)
- **Objetivo:** Orquestrar múltiplos containers interligados em rede interna.
- **Serviços:** API Node.js conectada ao PostgreSQL através de variáveis de ambiente (`.env`), com volume nomeado para persistência e `healthcheck`.

### [Exercício 3 — Boas Práticas + Múltiplos Ambientes](./exercicio-3/)
- **Objetivo:** Configuração isolada para ambientes de desenvolvimento (`dev`) e produção (`prod`).
- **Dev:** `Dockerfile.dev`, `docker-compose.dev.yml`, live reload com nodemon e volume montado.
- **Prod:** `Dockerfile.prod`, `docker-compose.prod.yml`, build otimizado sem volumes locais, usuário não-root.

### [Desafio Extra — Aplicação Completa com Docker Compose](./exercicio-extra/)
- **Objetivo:** Stack completa com 3 serviços integrados.
- **Serviços:**
  1. **API:** Node.js com rota `/health`, CRUD de usuários e conexão resiliente.
  2. **Banco de Dados:** PostgreSQL oficial com `healthcheck` e volume persistente.
  3. **Interface Web:** Adminer na porta `8080:80` para gerenciamento visual do banco.

---

## 🚀 Como testar localmente

Cada pasta possui seu próprio arquivo `README.md` com os comandos específicos de execução (`docker compose up`).
Certifique-se de ter o **Docker Desktop** instalado e em execução no seu computador.
