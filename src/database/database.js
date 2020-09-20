// Set new Sequelize ORM
const Sequelize = require('sequelize');

// Set environment mode and development mode
const environment = process.env.NODE_ENV || 'development';
const config = require('./../config/config.js')[environment];

// Giving for sequelize settings of database
const sequelize = new Sequelize(
    config.database.name,
    config.database.user,
    config.database.password,
    {
        host: config.database.host,
        dialect: config.database.dialect
    }
);

console.log('Conectado');
module.exports = sequelize;