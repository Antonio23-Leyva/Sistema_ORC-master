const { meseros } = require('../models/Mesero');
const { ordenes } = require('../models/Orden');


meseros.belongsTo(ordenes, {
    foreignKey: 'fkId'
});

ordenes.hasMany(meseros, {
    foreignKey: 'fkId'
});

module.exports = {
    meseros,
    ordenes
};
