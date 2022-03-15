const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

// Gestionar el tipo de user(Empleado,Gerente,Cajero).
exports.Usuario = sequelize.define('usuarios', {
    idUsuario: {
        primaryKey: true,
        type: Sequelize.STRING,
        allowNull: false,
        autoIncrement: false,
    },
    rol: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
    },
    correo: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
            isEmail: true,
            notEmpty: true
        }
    },
    contraseña: {
        type: Sequelize.STRING,
        allowNull: false
    }
        
});

