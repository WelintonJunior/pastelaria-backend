const express = require('express'); // Importa o framework Express
const controller = require('./controller/index'); // Importa o controller com a lógica do status

const router = express.Router(); // Cria um roteador específico

// Define rota GET para "/status"
router.get('/', (req, res) => {
  controller.getStatus(res); // Chama o método getStatus do controller e envia a resposta
});

module.exports = router; // Exporta o roteador para ser usado no app principal
