
const express = require('express');
const cors = require('cors');
const usuariosRouter = require('./routes/usuarios');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/usuarios', usuariosRouter);

app.get('/', (req, res) => {
	res.send('Connexa API rodando');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`);
});
