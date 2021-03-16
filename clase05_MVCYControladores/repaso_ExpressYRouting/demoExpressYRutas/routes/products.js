const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')

router.get('/', productController.index);
router.get('/marca', productController.listaDeMarcas);
router.get('/marca/:pepe', productController.productosPorMarca);
router.get('/autos', productController.listaAutos);
router.get('/autos/marca/:marca', productController.AutosPorMarca);
router.get('/autos/color/:color', productController.AutosPorColor)
router.get('/autos/anio/:anio', productController.AutosPorAnio);


module.exports = router;