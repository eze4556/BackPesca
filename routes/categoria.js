// routes/categoriaRoutes.js
const express = require('express');
const router = express.Router();
const categoriaController = require('../controller/categoriaController');


router.post('/', categoriaController.createCategoria);
// Ruta para obtener todas las categorías
router.get('/', categoriaController.getAllCategorias);

// Ruta para obtener una categoría por ID
router.get('/:id', categoriaController.getCategoriaById);

// Ruta para actualizar una categoría
router.put('/:id', categoriaController.updateCategoria);

router.delete('/:id', categoriaController.deleteCategoria);

module.exports = router;




