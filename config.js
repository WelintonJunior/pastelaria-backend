require('dotenv').config(); // Carrega variáveis de ambiente do arquivo .env para process.env

const config = {
  port: 5000, // Porta padrão do servidor
};

module.exports = config; // Exporta a config para uso em outros arquivos
