const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Docker!');
});

app.listen(PORT, () => {
  console.log(`🚀 Exercício 1 rodando em http://localhost:${PORT}`);
});
