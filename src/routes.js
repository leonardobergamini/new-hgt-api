const { Router } = require('express');

const Usuario = require('./models/Usuario');

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await Usuario.findAll();
  return res.json(user);
});

module.exports = routes;
