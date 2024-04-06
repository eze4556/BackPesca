// routes/nuevoProductoRoutes.js
const express = require('express');
const router = express.Router();
const nuevoProductoController = require("../controller/nuevoPcontroller");

// Ruta para crear un nuevo producto
router.post('/', nuevoProductoController.createNuevoProducto);

module.exports = router;
