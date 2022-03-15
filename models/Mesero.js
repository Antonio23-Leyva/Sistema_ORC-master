const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

exports.Mesero = sequelize.define('Meseros', {
    idMesero: {
        primaryKey: true,
        type: Sequelize.STRING,
        allowNull: false,
        autoIncrement: false
    },
    turno: {
        type: Sequelize.STRING,
        allowNull: false
    } 
});

