// routes/productos.js
const express = require('express');
const router = express.Router();
const productoController = require('../controller/productoController');
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

// Ruta para crear un nuevo evento con la carga de imagen
router.post('/', upload.single('imagen'), productoController.createProducto);

router.get('/', productoController.getAllProductos);
router.get('/categoria/:id', productoController.getProductoByCategoriaId);
router.get('/:id', productoController.getProductoById);
router.put('/:id', productoController.updateProducto);
router.delete('/:id', productoController.deleteProducto);

module.exports = router;