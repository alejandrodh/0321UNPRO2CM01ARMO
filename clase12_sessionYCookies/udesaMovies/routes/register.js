var express = require('express');
var router = express.Router();
var registerController = require('../controllers/registerController');

/* GET home page. */
router.get('/', registerController.index);
router.post('/', registerController.store);

module.exports = router;
