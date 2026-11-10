const express = require('express');
const { Pool } = require('pg');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

const pool = new Pool({
  host: process.env.DB_HOST || 'db',
  port: Number(process.env.DB_PORT) || 5432,
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'postgres123',
  database: process.env.DB_NAME || 'exercicio3_db',
});

async function initDb() {
  let retries = 5;
  while (retries > 0) {
    try {
      await pool.query(`
        CREATE TABLE IF NOT EXISTS messages (
          id SERIAL PRIMARY KEY,
          environment VARCHAR(50) NOT NULL,
          content TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);
      console.log(`✅ Banco conectado com sucesso no ambiente [${NODE_ENV}]!`);
      break;
    } catch (err) {
      console.error(`⚠️ Tentando conectar ao banco (${retries} restantes)...`, err.message);
      retries -= 1;
      await new Promise((res) => setTimeout(res, 3000));
    }
  }
}

app.get('/', (req, res) => {
  res.json({
    message: 'Exercício 3 - multi-ambientes',
    environment: NODE_ENV,
    liveReload: NODE_ENV === 'development',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ status: 'ok', environment: NODE_ENV, database: 'connected' });
  } catch (error) {
    res.status(500).json({ status: 'error', environment: NODE_ENV, error: error.message });
  }
});

app.get('/messages', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM messages ORDER BY id DESC');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/messages', async (req, res) => {
  try {
    const { content } = req.body;
    const text = content || `Mensagem enviada via ${NODE_ENV}`;
    const result = await pool.query(
      'INSERT INTO messages (environment, content) VALUES ($1, $2) RETURNING *',
      [NODE_ENV, text]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, async () => {
  console.log(`🚀 Exercício 3 rodando em http://localhost:${PORT} [Ambiente: ${NODE_ENV}]`);
  await initDb();
});

