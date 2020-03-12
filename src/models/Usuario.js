const { Sequelize, Model } = require('sequelize');

class Usuario extends Model {
    static init(sequelize) {
        super.init({
            nome: Sequelize.STRING,
            dt_nascimento: Sequelize.DATE,
            cpf: Sequelize.STRING,
            cnpj: Sequelize.STRING,
            telefone: Sequelize.STRING,
            produtor: Sequelize.BOOLEAN,
            email: Sequelize.STRING,
            password_hash: Sequelize.STRING,
            senha: Sequelize.VIRTUAL,
        }, {
            sequelize,
            modelName: 'usuarios',
        });

        return this;
    }
}

module.exports = Usuario;
