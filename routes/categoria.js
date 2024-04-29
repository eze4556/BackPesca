// routes/categoriaRoutes.js
const express = require('express');
const router = express.Router();
const categoriaController = require('../controller/categoriaController');
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
router.post('/', upload.single('imagen'), categoriaController.createCategoria);

// Ruta para obtener todas las categorías
router.get('/', categoriaController.getAllCategorias);

// Ruta para obtener una categoría por ID
router.get('/:id', categoriaController.getCategoriaById);

// Ruta para actualizar una categoría
router.put('/:id', categoriaController.updateCategoria);

router.delete('/:id', categoriaController.deleteCategoria);

module.exports = router;




