var express = require('express');
var router = express.Router();
const movieController = require('../controllers/movieController')

/* GET home page. */
router.get('/detail/:id', movieController.show);
router.get('/new', movieController.new);
router.get('/recomended', movieController.recomended);

module.exports = router;
