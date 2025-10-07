const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../db'); // arquivo que conecta com o SQLite

const router = express.Router();
const SALT_ROUNDS = 10;

// Rota de cadastro de usuário
router.post('/cadastro', async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios.' });
  }

  try {
    // Criptografar a senha
    const senhaHash = await bcrypt.hash(senha, SALT_ROUNDS);
    const dataCadastro = new Date().toISOString();

    // Inserir no banco de dados
    db.run(
      `INSERT INTO usuarios (nome, email, senha_hash, data_cadastro) VALUES (?, ?, ?, ?)`,
      [nome, email, senhaHash, dataCadastro],
      function (err) {
        if (err) {
          if (err.message.includes('UNIQUE constraint failed')) {
            return res.status(409).json({ erro: 'Email já cadastrado.' });
          }
          return res.status(500).json({ erro: 'Erro ao cadastrar usuário.' });
        }

        res.status(201).json({
          id: this.lastID,
          mensagem: 'Usuário cadastrado com sucesso.',
        });
      }
    );
  } catch (error) {
    res.status(500).json({ erro: 'Erro interno do servidor.' });
  }
});

module.exports = router;
