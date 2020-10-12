const Sequelize = require('sequelize');
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
    }

});

// To creat relational fields, Foreign Key
District.hasMany(Street);  // 1-N
Street.belongsTo(District);  //N-1

module.exports = Street;