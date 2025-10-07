const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../database');

const router = express.Router();

function validarEmailInstitucional(email) {
  // Aceita apenas e-mails institucionais
  return /@\w+\.edu(\.br)?$/.test(email);
}

router.post('/', async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' });
  }
  if (!validarEmailInstitucional(email)) {
    return res.status(400).json({ mensagem: 'E-mail institucional inválido.' });
  }
  if (senha.length < 6) {
    return res.status(400).json({ mensagem: 'Senha deve ter pelo menos 6 caracteres.' });
  }

  db.get('SELECT id FROM usuarios WHERE email = ?', [email], async (err, row) => {
    if (err) return res.status(500).json({ mensagem: 'Erro no banco de dados.' });
    if (row) return res.status(409).json({ mensagem: 'E-mail já cadastrado.' });

    const senhaHash = await bcrypt.hash(senha, 10);
    const dataCadastro = new Date().toISOString();

    db.run(
      `INSERT INTO usuarios (nome, email, senha_hash, data_cadastro) VALUES (?, ?, ?, ?)`,
      [nome, email, senhaHash, dataCadastro],
      function (err) {
        if (err) return res.status(500).json({ mensagem: 'Erro ao cadastrar usuário.' });
        res.status(201).json({ id: this.lastID, mensagem: 'Usuário cadastrado com sucesso.' });
      }
    );
  });
});

module.exports = router;
