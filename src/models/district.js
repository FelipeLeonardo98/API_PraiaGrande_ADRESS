// getting Sequelize
const Sequelize = require('sequelize');
// getting object sequelize WITH seetings of connection
const sequelize = require('../database/database.js');
const Street = require('./street.js');

const District = sequelize.define("district", {
    id_district: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nm_district: {
        type: Sequelize.STRING(45),
        allowNull: false
    },
    ds_zone: {
        type: Sequelize.STRING(45),
        allowNull: true
    }


});

module.exports = District;