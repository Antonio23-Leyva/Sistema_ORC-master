const modelOrders = require('../models/Orden');


exports.addOrder = () =>{

};

exports.updateOrder = (data, condition) =>{
    modelOrders.Orden.update({ campo: condition }, 
        {
            where:{ params:data }
        });
};

exports.deleteOrder = (data) =>{
    modelOrders.Orden.destroy({
        where: {
            categoria: data
        }
    });
};

exports.getOrders = () =>{
    modelOrders.Orden.findAll()
        .then( results =>{
            console.log(results);
        })
        .catch( err =>{
            console.log(err);
        });
};