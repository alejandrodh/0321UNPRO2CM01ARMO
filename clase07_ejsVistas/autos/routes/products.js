const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')

router.get('/', productController.index);
router.get('/marca', productController.listaDeMarcas);
router.get('/marca/:pepe', productController.productosPorMarca);
router.get('/autos', productController.listaAutos);
router.get('/autos/marca/:marca', productController.autosPorMarca);
router.get('/autos/color/:color', productController.autosPorColor)
router.get('/autos/anio/:anio', productController.autosPorAnio);


module.exports = router;