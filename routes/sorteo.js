// routes/sorteoRoutes.js
const express = require('express');
const router = express.Router();
const sorteoController = require('../controller/sorteoController');
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
router.post('/', upload.single('imagen'), sorteoController.createSorteo);

// Ruta para eliminar un sorteo
router.delete('/:id', sorteoController.deleteSorteo);
// Ruta para obtener todos los sorteos
router.get('/', sorteoController.getAllSorteos);

// Ruta para obtener un sorteo por ID
router.get('/:id', sorteoController.getSorteoById);

// Ruta para actualizar un sorteo
router.put('/:id', sorteoController.updateSorteo);

module.exports = router;
