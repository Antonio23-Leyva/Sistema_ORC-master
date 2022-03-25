const modelProduct = require('../controllers/controladorProductos');

const express = require('express');
const router = express.Router();

router
    .route('/')
/*[=========== PRODUCTS ===========]*/ 
    .get(modelProduct.getProducts)
    .post(modelProduct.addProduct);
router
    .route('/:id')  
    .put(modelProduct.updateProduct)
    .delete(modelProduct.deleteProduct);
      

module.exports = router;