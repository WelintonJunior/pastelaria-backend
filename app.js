const express = require('express'); // Framework para criar o servidor HTTP
const bodyParser = require('body-parser'); // Middleware para ler dados do body da requisição
const expressip = require('express-ip'); // Middleware para detectar IP do cliente
const pool = require('./src/infraestructure/db');
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false })); 

app.use(expressip().getIpInfoMiddleware); 


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  ); 
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  ); 
  res.setHeader('Access-Control-Allow-Credentials', true);
  next(); 
});

require('./routes')(app); 

module.exports = app; 
