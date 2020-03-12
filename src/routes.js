const { Router } = require('express');

const UsuarioController = require('./controllers/UsuarioController');

const routes = new Router();

routes.get('/usuarios', UsuarioController.index);
routes.post('/usuarios', UsuarioController.store);

module.exports = routes;
