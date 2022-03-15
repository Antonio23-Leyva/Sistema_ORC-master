const sequelize = require('./utils/database');
const { v1:uuid } = require('uuid');

const callModelProducto = require('./controllers/controladorProductos');
const callModelUsuarios = require('./controllers/controladorUsuarios');
const callModelMeseros = require('./controllers/controladorMeseros');
const callModelOrdenes = require('./controllers/controladorOrdenes');

// callModel.getProductos();
// callModel.addProducto(uuid(),'gorditas','comida',120.0);
// callModel.addProducto(uuid(),'tacos asada','comida',160.0);
// callModel.addProducto(uuid(),'guiso machaca','comida',150.0);

/* 
    [==============> USERS <==============]
*/
//callModelUsuarios.getUsuarios();

// callModelMeseros.addMeseros(uuid(),'Vespertino');
callModelMeseros.getMeseros();
// callModel.updateUsuarios('saul15@hotmail.com','saul13@gmail.com');
// callModel.deleteUsuarios('monicash20@gmail.com');
// sequelize.sync()
//     .then(result => {
//         console.log(result);
//     })
//     .catch(err =>{
//         console.log(err);
//     });

// callModel.addUser(uuid(),'Gerente','monicash20@gmail.com','2asw2a2');

// const express = require('express');

// const app = express();

// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// const sequelize = require('./utils/database');

// const PORT = 4001;
// app.listen(PORT, () => {
//     console.log(`El servidor se esta ejecutando en el puerto ${PORT}`);
// });

// try {
//     sequelize.authenticate();
//     console.log('La conexión se ha establecido con éxito.');
// } catch (error) {
//     console.error('No se puede conectar a la base de datos:', error);
// }
