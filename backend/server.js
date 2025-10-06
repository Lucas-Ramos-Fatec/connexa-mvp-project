const express = require('express');
const usuariosRouter = require('./routes/usuarios');

const app = express();
app.use(express.json());
app.use('/api/usuarios', usuariosRouter);
