const express = require('express');
const { Pool } = require('pg');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

const pool = new Pool({
  host: process.env.DB_HOST || 'db',
  port: Number(process.env.DB_PORT) || 5432,
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'postgres123',
  database: process.env.DB_NAME || 'extra_db',
});

// Inicialização automática das tabelas
async function initDb() {
  let retries = 5;
  while (retries > 0) {
    try {
      await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          name VARCHAR(120) NOT NULL,
          email VARCHAR(120) UNIQUE NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);

      // Inserir registro inicial caso a tabela esteja vazia
      const countRes = await pool.query('SELECT COUNT(*) FROM users');
      if (parseInt(countRes.rows[0].count, 10) === 0) {
        await pool.query(`
          INSERT INTO users (name, email)
          VALUES ('Admin Orion', 'admin@orion.dev')
        `);
      }

      console.log('✅ Banco de dados PostgreSQL conectado e tabela `users` pronta!');
      break;
    } catch (err) {
      console.error(`⚠️ Tentativa de conexão falhou (${retries} restantes):`, err.message);
      retries -= 1;
      await new Promise((res) => setTimeout(res, 3000));
    }
  }
}

// Rota obrigatória de /health
app.get('/health', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.status(200).json({ status: 'ok' });
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
});

// Rota raiz informativa
app.get('/', (req, res) => {
  res.json({
    message: '🚀 Desafio extra - stack completa com docker compose',
    routes: {
      healthCheck: 'GET /health',
      listUsers: 'GET /users',
      createUser: 'POST /users { "name": "...", "email": "..." }',
      adminerWeb: 'http://localhost:8080 (Servidor: db | Usuário: postgres | Senha: <definida no .env>)'
    }
  });
});

// Listar todos os usuários
app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Criar novo usuário
app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Os campos name e email são obrigatórios.' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    res.status(201).json({ message: 'Usuário cadastrado com sucesso!', user: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, async () => {
  console.log(`🌐 Servidor API ouvindo na porta ${PORT}`);
  await initDb();
});

