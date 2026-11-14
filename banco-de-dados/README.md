# Módulo de banco de dados — Orion bootcamp (New Rizon)

Este diretório contém a resolução de todos os exercícios práticos do módulo de banco de dados, cobrindo bancos relacionais (PostgreSQL) e não relacionais (MongoDB).

```text
banco-de-dados/
├── docker-compose.yml                  # Orquestração do PostgreSQL e MongoDB
├── README.md                           # Guia geral de execução e credenciais
│
├── exercicio-1/                        # Exercício 1 — Banco relacional (SQL básico)
│   ├── exercicio-1.sql                 (DDL de cursos/alunos, FKs, INSERTs, SELECT e validação de erro)
│   ├── README.md
│   └── prints/                         (Evidências dos resultados e validação da FK)
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

## 🔌 Dados de conexão das ferramentas

### 1. PostgreSQL (DBeaver) — Exercícios 1 e 2
* **Host:** `localhost`
* **Porta:** `5432`
* **Banco de dados:** `orion_db`
* **Usuário:** `orion_user`
* **Senha:** `orion_password`

### 2. MongoDB (MongoDB Compass / mongosh) — Exercícios 3 e 4
* **URI de conexão:**
  `mongodb://orion_admin:orion_admin_pass@localhost:27017/`
* **Host:** `localhost`
* **Porta:** `27017`
* **Database de autenticação (Auth DB):** `admin`
* **Usuário:** `orion_admin`
* **Senha:** `orion_admin_pass`

---

## 📸 Evidências entregues (prints)
Cada subpasta de exercício contém seu diretório `prints/` com as capturas de tela comprovando a execução bem-sucedida:
* **Exercício 1:** `prints/exercicio-1.jpg` (SELECT alunos) e `prints/exercicio-1-fk.jpg` (erro `fk_aluno_curso` comprovando a integridade da chave estrangeira).
* **Exercício 2:** `prints/exercicio-2.1.jpg` a `2.4.jpg` (JOINs, WHERE, UPDATE e LEFT JOIN).
* **Exercício 3:** `prints/exercicio-3.jpg` (Schema flexível no MongoDB Compass).
* **Exercício 4:** `prints/exercicio-4.1.jpg` a `4.4.jpg` (Filtro por tags, autor e comentários aninhados).
