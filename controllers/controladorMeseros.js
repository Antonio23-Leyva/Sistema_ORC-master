const modeloMesero = require('../models/Mesero');

exports.addMeseros = (id, turno) => {
    modeloMesero.Mesero.create({
        idMesero: id,
        turno: turno
    })
        .then( results =>{
            console.log('[============ transaction succesfull ============');
            console.log(results);
            console.log('[================================================');

        })
        .catch(err =>{
            console.log(err);
        });  
};

exports.updateMeseros = (data, condition) =>{
    modeloMesero.Mesero.update({campo:condition},{
        where:{ params:data }
    });
};

exports.deleteMeseros = (data) =>{
    modeloMesero.Mesero.destroy({
        where: {
            categoria: data
        }
    });
};

exports.getMeseros = () =>{
    modeloMesero.Mesero.findAll()
        .then( results =>{
            console.log(results);
        })
        .catch(err => {
            console.log(err);
        });
};