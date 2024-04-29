// routes/categoriaRoutes.js
const express = require('express');
const router = express.Router();
const quienesSomos= require('../controller/quienesSomos')

const multer = require('multer')
const path = require('path')


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads'); // Directorio donde se almacenarán las imágenes de categorías
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Nombre de la imagen
  }
});

const upload = multer({ storage: storage });

// Ruta para crear una nueva categoría con la carga de imagen
router.post('/', upload.single('imagen'), quienesSomos.createSomos);


router.get('/', quienesSomos.getSomos)

router.delete('/:id', quienesSomos.deleteSomos)

module.exports = router;
