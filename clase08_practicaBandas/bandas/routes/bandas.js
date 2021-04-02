const express = require('express');
const router = express.Router();
const bandaController = require('../controllers/bandaController')

router.get('/', bandaController.index);
router.get('/id/:id', bandaController.show); 
router.get('/genre/:genre', bandaController.genre);  


module.exports = router;