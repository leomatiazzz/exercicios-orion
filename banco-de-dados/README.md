# Módulo de banco de dados — Orion bootcamp (New Rizon)

Este diretório contém a resolução de todos os exercícios do módulo de banco de dados:

```text
banco-de-dados/
├── Banco de dados - Exercícios.pdf     # Especificação oficial dos exercícios
├── docker-compose.yml                  # Orquestração do PostgreSQL e MongoDB
│
├── exercicio-1/                        # Exercício 1 — Banco relacional (SQL básico)
│   ├── exercicio-1.sql                 (DDL de cursos/alunos, FKs, INSERTs e SELECT)
│   ├── README.md
│   └── prints/                         (Salve aqui seus prints do resultado)
│
├── exercicio-2/                        # Exercício 2 — Banco relacional (JOINs e filtros)
│   ├── exercicio-2.sql                 (INNER JOIN, WHERE, UPDATE e LEFT JOIN)
│   ├── README.md
│   └── prints/
│
├── exercicio-3/                        # Exercício 3 — Não relacional (CRUD básico)
│   ├── exercicio-3.js                  (Criação de posts, schema flexível e find)
│   ├── README.md
│   └── prints/
│
└── exercicio-4/                        # Exercício 4 — Não relacional (consultas avançadas)
    ├── exercicio-4.js                  (updateOne com comentários, busca em arrays e autor)
    ├── README.md
    └── prints/
```

---

## 🚀 Como subir os bancos de dados com docker

1. Abra o terminal na pasta `banco-de-dados`:
   ```bash
   cd banco-de-dados
   ```

2. Inicie os dois containers em segundo plano:
   ```bash
   docker compose up -d
   ```

3. Para verificar se os serviços estão saudáveis:
   ```bash
   docker compose ps
   ```

4. Para parar os bancos quando terminar os estudos:
   ```bash
   docker compose down
   ```

---

## 🔌 Dados de conexão para o dbeaver

### 1. PostgreSQL (Exercícios 1 e 2)
* **Host:** `localhost`
* **Porta:** `5432`
* **Banco de dados:** `orion_db`
* **Usuário:** `orion_user`
* **Senha:** `orion_password`

### 2. MongoDB (Exercícios 3 e 4)
* **URI de conexão:**
  `mongodb://orion_admin:orion_admin_pass@localhost:27017/`
* **Host:** `localhost`
* **Porta:** `27017`
* **Database de autenticação (Auth DB):** `admin`
* **Usuário:** `orion_admin`
* **Senha:** `orion_admin_pass`

---

## 📸 Como organizar a entrega dos prints
Após rodar os scripts no DBeaver (ou na ferramenta de sua escolha):
1. Tire print das telas comprovando a execução dos comandos e a exibição das tabelas/documentos retornados.
2. Salve as imagens dentro da pasta `prints/` correspondente a cada exercício.

