/*const Sequelize = require('sequelize');
const sequelize = require('../database/database.js');
const District = require('./district');


const Street = sequelize.define("street", {
    id_street: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nm_street: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    fk_district: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // User belongsTo Company 1:1
            model: 'District',
            key: 'id_district'
        }
    }


})

module.exports = Street;*/