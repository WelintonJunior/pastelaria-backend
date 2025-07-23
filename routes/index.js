const status = require('../src/health/routes'); // Importa as rotas do módulo de health check

module.exports = (app) => {
    app.use('/status', status); // Define a rota "/status" que responde conforme o módulo importado

    app.use('*', (req, res) => {
        res.send('Not found!!!'); // Rota coringa para qualquer caminho não definido → retorna "Not found!!!"
    });
};
