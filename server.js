const express = require('express');
const cors = require('cors');
const path = require('path');
const questionRoutes = require('./src/routes/questionRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'src/public')));

// Rotas
app.use('/api', questionRoutes);

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/public/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;