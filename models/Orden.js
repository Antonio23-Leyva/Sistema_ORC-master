const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

exports.Orden = sequelize.define('ordenes', {
    idOrden: {
        type: Sequelize.STRING,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    },
    nombreCliente: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mesero: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cantidad: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    fecha: {
        type: Sequelize.DATE,
        allowNull: false
    },
    hora: {
        type: Sequelize.TIME,
        allowNull: false
    },
    total: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    estado: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
}); 




