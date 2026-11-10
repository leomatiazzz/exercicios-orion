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
  database: process.env.DB_NAME || 'exercicio2_db',
});

// Inicialização da tabela para persistência e testes
async function initDb() {
  let retries = 5;
  while (retries > 0) {
    try {
      await pool.query(`
        CREATE TABLE IF NOT EXISTS items (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);
      console.log('✅ Banco de dados conectado e tabela inicializada com sucesso!');
      break;
    } catch (err) {
      console.error(`⚠️ Erro ao conectar ao banco (${retries} tentativas restantes):`, err.message);
      retries -= 1;
      await new Promise((res) => setTimeout(res, 3000));
    }
  }
}

app.get('/', (req, res) => {
  res.json({
    message: 'API Exercício 2 conectada ao PostgreSQL!',
    endpoints: {
      health: 'GET /health',
      listItems: 'GET /items',
      createItem: 'POST /items { "name": "Item Name" }'
    }
  });
});

app.get('/health', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ status: 'ok', database: 'connected' });
  } catch (error) {
    res.status(500).json({ status: 'error', database: error.message });
  }
});

app.get('/items', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM items ORDER BY id DESC');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/items', async (req, res) => {
  try {
    const { name } = req.body;
    const itemName = name || `Item gerado em ${new Date().toLocaleTimeString()}`;
    const result = await pool.query(
      'INSERT INTO items (name) VALUES ($1) RETURNING *',
      [itemName]
    );
    res.status(201).json({ message: 'Item gravado com sucesso!', item: result.rows[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, async () => {
  console.log(`🚀 Exercício 2 - API rodando em http://localhost:${PORT}`);
  await initDb();
});

