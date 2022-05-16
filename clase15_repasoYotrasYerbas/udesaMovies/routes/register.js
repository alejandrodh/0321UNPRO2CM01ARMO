var express = require('express');
var router = express.Router();
var registerController = require('../controllers/registerController');
let multer = require('multer');
let path = require('path');

//Configurar multer.
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'public/images/avatars')) //Usamos path.join para evitar problemas de rutas. __dirname da la posición exacta de la carpeta en la que está el archivo. Luego desde ahí nos movemos hasta la carpeta public.
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})
 
var upload = multer({ storage: storage })


/* GET home page. */
router.get('/', registerController.index);
router.post('/', upload.single('avatar'),registerController.store);

router.get('/edit/:userId', registerController.edit);
router.post('/edit', upload.single('avatar'), registerController.update);
router.post('/destroy', registerController.destroy);



module.exports = router;
