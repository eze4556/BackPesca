// routes/nuevoProductoRoutes.js
const express = require('express');
const router = express.Router();
const nuevoProductoController = require("../controller/nuevoPcontroller");
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
router.post('/', upload.single('imagen'), nuevoProductoController.createNuevoProducto);

router.get('/', nuevoProductoController.getAllProductos);
router.get('/categoria/:id', nuevoProductoController.getProductoByCategoriaId);
router.get('/:id', nuevoProductoController.getProductoById);
router.put('/:id', nuevoProductoController.updateProducto);
router.delete('/:id', nuevoProductoController.deleteProducto);


module.exports = router;
