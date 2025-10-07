const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./connexa.db');

// Criação da tabela de usuários
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      senha_hash TEXT NOT NULL,
      data_cadastro TEXT NOT NULL
    )
  `);
});

module.exports = db;
