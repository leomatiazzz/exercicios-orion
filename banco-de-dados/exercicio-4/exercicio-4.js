// ============================================================
// Exercício 4 — Banco não relacional (consultas avançadas)
// Bootcamp Orion (New Rizon)
// Banco de dados: MongoDB
// ============================================================

use('orion_db');

// 1. Atualizar (Update): Adicionar o campo 'comentarios' como um array de documentos
db.posts.updateOne(
  { titulo: 'Vantagens de bancos de dados NoSQL' },
  {
    $set: {
      comentarios: [
        {
          usuario: 'Carlos Silva',
          texto: 'Excelente explicação sobre schema flexível!',
          criado_em: new Date('2026-11-14T02:00:00Z')
        },
        {
          usuario: 'Mariana Lima',
          texto: 'Muito útil para o desenvolvimento ágil.',
          criado_em: new Date('2026-11-14T02:15:00Z')
        }
      ]
    }
  }
);

// 2. Consulta com filtro dentro de um array: Retornar apenas posts que possuem a tag 'nosql'
db.posts.find({ tags: 'nosql' });

// 3. Consulta com filtro por campo específico: Retornar posts onde o autor seja 'Leo'
db.posts.find({ autor: 'Leo' });

// 4. Consulta para visualizar o post com o array de comentários aninhados
db.posts.find({ 'comentarios.0': { $exists: true } });
