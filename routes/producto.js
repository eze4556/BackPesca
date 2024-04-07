// routes/productos.js
const express = require('express');
const router = express.Router();
const productoController = require('../controller/productoController');


router.get('/', productoController.getAllProductos);
router.post('/', productoController.createProducto);
router.get('/:id', productoController.getProductoById);
router.put('/:id', productoController.updateProducto);
router.delete('/:id', productoController.deleteProducto);

module.exports = router;