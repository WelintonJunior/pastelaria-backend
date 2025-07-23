const express = require('express'); // Framework para criar o servidor HTTP
const bodyParser = require('body-parser'); // Middleware para ler dados do body da requisição
const expressip = require('express-ip'); // Middleware para detectar IP do cliente

const app = express();

app.use(bodyParser.json()); // Permite receber JSON no corpo das requisições
app.use(bodyParser.urlencoded({ extended: false })); // Permite receber dados de formulários (x-www-form-urlencoded)

app.use(expressip().getIpInfoMiddleware); // Adiciona info de IP do cliente em req.ipInfo

// Middleware para permitir CORS (requisições de outros domínios)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Permite qualquer origem
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  ); // Permite esses métodos HTTP
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  ); // Permite esses headers nas requisições
  res.setHeader('Access-Control-Allow-Credentials', true); // Permite envio de cookies/autenticação
  next(); // Continua para o próximo middleware ou rota
});

require('./routes')(app); // Importa e aplica as rotas definidas no arquivo routes.js

module.exports = app; // Exporta o app para ser usado em outro arquivo (ex: server.js)
