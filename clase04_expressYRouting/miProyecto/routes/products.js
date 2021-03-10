const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    return res.send("Hola es la página de productos")
})

module.exports = router;