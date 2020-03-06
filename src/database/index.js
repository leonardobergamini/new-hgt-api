const Sequelize = require('sequelize');

const Usuario = require('../models/Usuario');
const databaseConfig = require('../config/database');

const models = [Usuario];
class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

module.exports = new Database();
