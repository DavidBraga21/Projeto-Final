// api/restaurantes.js
const express = require('express');
const router = express.Router();

// Rota para obter todos os restaurantes
router.get('/', (req, res) => {
    req.connection.query('SELECT * FROM restaurantes', (error, results) => {
      if (error) {
        console.error('Erro ao executar a consulta:', error);
        res.status(500).json({ error: 'Erro ao obter os restaurantes' });
      } else {
        res.json(results);
      }
    });
  });

// Rota para obter um restaurante por ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM restaurantes WHERE id = ?';

  req.connection.query(query, [id], (err, results) => {
    if (err) {
      console.error('Erro ao executar consulta:', err);
      res.status(500).send('Erro ao obter o restaurante');
    } else if (results.length === 0) {
      res.status(404).send('Restaurante não encontrado');
    } else {
      res.json(results[0]);
    }
  });
});

// Rota para adicionar um restaurante
router.post('/', (req, res) => {
  const { nome, bairro, descricao, nota } = req.body;
  const query = 'INSERT INTO restaurantes (nome, bairro, descricao, nota) VALUES (?, ?, ?, ?)';

  req.connection.query(query, [nome, bairro, descricao, nota], (err, results) => {
    if (err) {
      console.error('Erro ao executar consulta:', err);
      res.status(500).send('Erro ao adicionar o restaurante');
    } else {
      res.json({ id: results.insertId, nome, bairro, descricao, nota });
    }
  });
});

// Rota para atualizar um restaurante
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { nome, bairro, descricao, nota } = req.body;
  const query = 'UPDATE restaurantes SET nome = ?, bairro = ?, descricao = ?, nota = ? WHERE id = ?';

  req.connection.query(query, [nome, bairro, descricao, nota, id], (err, results) => {
    if (err) {
      console.error('Erro ao executar consulta:', err);
      res.status(500).send('Erro ao atualizar o restaurante');
    } else if (results.affectedRows === 0) {
      res.status(404).send('Restaurante não encontrado');
    }


else {
      res.json({ id, nome, bairro, descricao, nota });
    }
  });
});

// Rota para excluir um restaurante
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM restaurantes WHERE id = ?';

  req.connection.query(query, [id], (err, results) => {
    if (err) {
      console.error('Erro ao executar consulta:', err);
      res.status(500).send('Erro ao excluir o restaurante');
    } else if (results.affectedRows === 0) {
      res.status(404).send('Restaurante não encontrado');
    } else {
      res.sendStatus(204);
    }
  });
});

module.exports = router;