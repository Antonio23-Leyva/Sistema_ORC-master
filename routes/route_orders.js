const modelOrders = require('../controllers/controladorOrdenes');

const express = require('express');
const router = express.Router();

router
    .route('/')
/*[=========== PRODUCTS ===========]*/ 
    .get(modelOrders.getOrders)
    .post(modelOrders.addOrder);
router
    .route('/:id')  
    .put(modelOrders.updateOrder)
    .delete(modelOrders.deleteOrder);
      

module.exports = router;