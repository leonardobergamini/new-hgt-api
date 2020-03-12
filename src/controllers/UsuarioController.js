const Usuario = require('../models/Usuario');

class UsuarioController {
    async index(req, res) {
        const usuarios = await Usuario.findAll();
        return res.json(usuarios);
    }

    async store(req, res) {
        const usuarioInserido = await Usuario.create(req.body);
        res.json(usuarioInserido);

    }
}

module.exports = new UsuarioController();
