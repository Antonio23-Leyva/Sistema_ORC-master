const S = require('sequelize');
const Categoria = (sequelize, S) => {

    const C = sequelize.define('categoria', {
        idCat: {
            primaryKey: true,
            type: S.INTEGER,
            allowNull: false,
            autoIncrement: true,
        },
        nombre: {
            allowNull: false,
            type: S.STRING,
            unique: true,
        },
    }, { timestamps: false });

    return C;
};

module.exports = Categoria;