const modelUser = require('../controllers/controladorUsuarios');

const express = require('express');
const router = express.Router();

router
    .route('/')
    .get(modelUser.getUsers)
    .post(modelUser.addUser);
router
    .route('/:id')  
    .put(modelUser.updateUser)
    .delete(modelUser.deleteUser);
      

module.exports = router;