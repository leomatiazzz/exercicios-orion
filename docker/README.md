# Módulo docker — Orion bootcamp (New Rizon)

Este diretório contém a resolução de todos os exercícios do módulo de Docker:

```text
docker/
├── Docker.pdf             # Especificação oficial dos exercícios
├── exercicio-1/           # Exercício 1 — Dockerfile + compose: "hello container"
├── exercicio-2/           # Exercício 2 — compose com API + banco de dados
├── exercicio-3/           # Exercício 3 — boas práticas + múltiplos ambientes (dev e prod)
└── exercicio-extra/       # Desafio extra — aplicação completa com docker compose (API + Postgres + Adminer)
```

---

## 📋 Resumo dos exercícios

### [Exercício 1 — Dockerfile + compose: "hello container"](./exercicio-1/)
- **Objetivo:** Criar imagem customizada a partir de Dockerfile e orquestrar com docker-compose.
- **Serviço:** Node.js Alpine expondo porta `3000:3000` e retornando `"Hello from Docker!"`.

### [Exercício 2 — compose com API + banco de dados](./exercicio-2/)
- **Objetivo:** Orquestrar múltiplos containers interligados em rede interna.
- **Serviços:** API Node.js conectada ao PostgreSQL através de variáveis de ambiente (`.env`), com volume nomeado para persistência e `healthcheck`.

### [Exercício 3 — boas práticas + múltiplos ambientes](./exercicio-3/)
- **Objetivo:** Configuração isolada para ambientes de desenvolvimento (`dev`) e produção (`prod`).
- **Dev:** `Dockerfile.dev`, `docker-compose.dev.yml`, live reload com nodemon e volume montado.
- **Prod:** `Dockerfile.prod`, `docker-compose.prod.yml`, build otimizado sem volumes locais, usuário não-root.

### [Desafio extra — aplicação completa com docker compose](./exercicio-extra/)
- **Objetivo:** Stack completa com 3 serviços integrados.
- **Serviços:**
  1. **API:** Node.js com rota `/health`, CRUD de usuários e conexão resiliente.
  2. **Banco de dados:** PostgreSQL oficial com `healthcheck` e volume persistente.
  3. **Interface web:** Adminer na porta `8080:80` para gerenciamento visual do banco.

---

## 🚀 Como testar localmente

Cada pasta possui seu próprio arquivo `README.md` com os comandos específicos de execução (`docker compose up`).
Certifique-se de ter o **Docker Desktop** instalado e em execução no seu computador.
