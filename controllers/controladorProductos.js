const modeloProducto  = require ('../models/Producto');

/* 
    [==============> PRODUCTS <==============]
*/
exports.addProducto = (idProducto, nombre, categoria, precio) => {
    modeloProducto.Producto.create({
        idProducto: idProducto,
        nombre: nombre,
        categoria: categoria,
        precio: precio,
    })
        .then( results => {
            console.log(results);
        })
        .catch( error => {
            console.log(error);
        });
};

exports.updateProductos = (data,condition) =>{
    modeloProducto.Producto.update({campo:condition},
        {
            where:{ params:data }
        });
};

exports.deleteProductos = (data) =>{
    modeloProducto.Producto.destroy({
        where: {
            categoria: data
        }
    });
};


exports.getProductos = () =>{
    modeloProducto.Producto.findAll()
        .then(results =>{
            console.log(results);
        })
        .catch(err => {
            console.log(err);
        });
};


