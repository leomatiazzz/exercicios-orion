// ============================================================
// Exercício 3 — Banco não relacional (CRUD básico)
// Bootcamp Orion (New Rizon)
// Banco de dados: MongoDB
// ============================================================

// Selecionar ou alternar para o banco de dados 'orion_db' (ou o banco desejado)
use('orion_db');

// 1. Criar a coleção 'posts' (opcional caso faça inserção direta)
db.createCollection('posts');

// 2. Inserir primeiro documento (Create básico com campos fixos)
db.posts.insertOne({
  titulo: 'Primeiros passos com Docker e containers',
  autor: 'Leo',
  conteudo: 'Aprender containers facilita muito o deploy e o gerenciamento de serviços em qualquer ambiente.'
});

// 3. Testar schema flexível: Inserir segundo documento com um campo novo 'tags' (array de strings)
db.posts.insertOne({
  titulo: 'Vantagens de bancos de dados NoSQL',
  autor: 'Ana',
  conteudo: 'Bancos de dados orientados a documentos permitem modelagens dinâmicas e sem esquemas rígidos.',
  tags: ['nosql', 'flexivel', 'mongodb']
});

// 4. Consultar todos os documentos cadastrados na coleção 'posts' (Read)
db.posts.find();

