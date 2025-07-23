const app = require('./app'); // Importa o app Express já configurado
const config = require('./config'); // Importa as configurações (porta, etc.)

const PORT = process.env.PORT || config.port; // Usa a porta definida no .env ou fallback para 5000

const server = app.listen(PORT, () => {
  console.log('server is running on port', server.address().port); // Loga a porta usada no console
});
