const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../db');

const router = express.Router();

router.post('/cadastro', async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const senhaHash = await bcrypt.hash(senha, 10);
    const dataCadastro = new Date().toISOString();

    db.run(
      `INSERT INTO usuarios (nome, email, senha_hash, data_cadastro) VALUES (?, ?, ?, ?)`,
      [nome, email, senhaHash, dataCadastro],
      function (err) {
        if (err) {
          return res.status(500).json({ erro: 'Erro ao cadastrar usuário' });
        }
        res.status(201).json({ id: this.lastID, mensagem: 'Usuário cadastrado com sucesso' });
      }
    );
  } catch (error) {
    res.status(500).json({ erro: 'Erro interno do servidor' });
  }
});

module.exports = router;
