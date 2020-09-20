/* getting Sequelize
const Sequelize = require('sequelize');
// getting object sequelize WITH seetings of connection
const sequelize = require('../database/database.js');

const Street = sequelize.define("street", {
    id_street: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nm_street: {
        type: Sequelize.STRING(45),
        allowNull: false
    },
    fk_district: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'District',
            key: 'id_district'
        }
    }
});

module.exports = Street; */