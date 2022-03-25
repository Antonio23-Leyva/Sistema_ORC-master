const modelWaiters = require('../controllers/controladorMeseros');

const express = require('express');
const router = express.Router();

router
    .route('/')
/*[=========== PRODUCTS ===========]*/ 
    .get(modelWaiters.getWaiters)
    .post(modelWaiters.addWaiter);
router
    .route('/:id')  
    .put(modelWaiters.getWaiters)
    .delete(modelWaiters.deleteWaiter);
      

module.exports = router;