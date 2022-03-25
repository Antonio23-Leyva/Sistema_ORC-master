const modeloUsuario  = require ('../models/Usuario');
const express = require('express');

/* 
    [==============> USERS <==============]
*/


exports.addUser = async(request, response) => { 
    try{ 
        const results = await modeloUsuario.Usuario.create(request.body);
        response.status(201).json({
            status: 'User add',
            data: results    
        });
    }catch(error){
        response.status(500).json({
            status: 'failed!',
            msg: error
        });
    }  
};

exports.updateUser= async(request, response) =>{
    try{ 
        const results = await modeloUsuario.Usuario.update(request.body, {
            where:
                { 
                    idUsuario: request.params.id 
                }
        });
        response.status(201).json({
            status: 'User updated',
            data: results 
        });
    }catch(error){
        response.status(500).json({
            status: 'failed!',
            msg: error
        });
    }    
};

exports.deleteUser = async(request, response) =>{
    try{ 
        const results = await modeloUsuario.Usuario.destroy({
            where: {
                idUsuario: request.params.id
            }
        });
        response.status(201).json({
            status: 'User deleted id:'+ request.params.id,
            data: results
        });
    }catch(error){
        response.status(500).json({
            status: 'failed!',
            msg: error
        });
    }  
};


exports.getUsers = async(request,response) =>{
    try {
        const results = await modeloUsuario.Usuario.findAll();
        response.status(201).json({
            status: 'transaction succesfull...',
            data: 
                results
        });
    } catch (error) {
        response.status(500).json({
            status: 'failed',
            msg: error
        });
    }
};

