const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configurações do banco de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'cimatec',
  database: 'product_catalog',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao banco de dados MySQL');
});

// Rota para buscar todos os produtos
app.get('/api/products', (req, res) => {
  const sql = 'SELECT * FROM produtos';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Rota para buscar produto por ID
app.get('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM produtos WHERE id_produto = ?';
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.send(result[0]);
  });
});

// Rota para atualizar produto
app.put('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;
  const sql = 'UPDATE produtos SET nome_produto = ?, preco = ?, descricao = ? WHERE id_produto = ?';
  db.query(sql, [name, price, description, id], (err, result) => {
    if (err) throw err;
    res.send({ message: 'Produto atualizado com sucesso!' });
  });
});

// Rota para deletar produto
app.delete('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM produtos WHERE id_produto = ?';
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.send({ message: 'Produto deletado com sucesso!' });
  });
});

app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
