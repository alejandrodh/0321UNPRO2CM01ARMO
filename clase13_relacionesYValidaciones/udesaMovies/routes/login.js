var express = require('express');
var router = express.Router();
var loginController = require('../controllers/loginController');

/* GET home page. */
router.get('/', loginController.index);
router.post('/', loginController.login);
router.post('/logout', loginController.logout);


module.exports = router;