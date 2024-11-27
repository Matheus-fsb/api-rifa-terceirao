// Importa os módulos necessários
const express = require('express');
const path = require('path');
const cors = require('cors');

// Importa as rotas da aplicação
const numbersRoutes = require('./routes/numbersRoutes.js');
const adminRoutes = require('./routes/adminRoutes.js');
const buyerRoutes = require('./routes/buyerRoutes.js');
const logRoutes = require('./routes/logRoutes.js');
const saveLogRoutes = require('./routes/saveLogsRouter.js');
const authRoutes = require('./routes/authRoutes.js');
const authenticateToken = require('./middware/auth.js');

const app = express();

// Permite requisições CORS
app.use(cors());

// Configura o middleware para parsing de JSON e URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Registra as rotas da aplicação
app.use(numbersRoutes);
app.use(buyerRoutes);
app.use(adminRoutes);
app.use(authRoutes);
app.use(logRoutes);
app.use(saveLogRoutes);

// Rota principal que retorna a página inicial
app.get('/', (req, res) => {
  res.send('API para Rifas funcionando!');
});

// Rota de erro (404) quando a URL não é encontrada
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Rota não encontrada',
  });
});

module.exports = app;
