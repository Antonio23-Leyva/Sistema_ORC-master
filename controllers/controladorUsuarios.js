const modeloUsuario  = require ('../models/Usuarios');

/* 
    [==============> USERS <==============]
*/
exports.addUser = (idUsuario,rol,correo,contraseña) =>{
    modeloUsuario.Usuario.create({
        idUsuario:idUsuario,
        rol: rol,
        correo: correo,
        contraseña: contraseña
    })
        .then( results => {
            console.log(`User add sucefull ${results}`);
        })
        .catch(error => {
            console.log(error);
        });
};

/* 
  data: informacion a actualizar
  condition: Parametro del campo que se desea actualizar. 
*/
exports.updateUsuarios = (data,condition) =>{
    modeloUsuario.Usuario.update({correo:data},{
        // Condicion que se debe cumplir
        where:{ correo:condition }
    })
        .then(results => {
            console.log(`Upated${results}`);
        })
        .catch(error =>{
            console.log(error);
        });
};

exports.deleteUsuarios = (data) =>{
    modeloUsuario.Usuario.destroy({
        // Condicion que se debe cumplir
        where: {
            correo: data
        }
    })
        .then(results => {
            console.log(`${results}`);
        })
        .catch(error =>{
            console.log(error);
        });
};

exports.getUsuarios = () =>{
    modeloUsuario.Usuario.findAll()
        .then(results =>{
            console.log('[==============> USERS <==============]');
            console.log(results);
        })
        .catch(err => {
            console.log(err);
        });
};