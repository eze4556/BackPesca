// routes/sorteoRoutes.js
const express = require('express');
const router = express.Router();
const sorteoController = require('../controller/sorteoController');

// Ruta para crear un nuevo sorteo
router.post('/', sorteoController.createSorteo);

// Ruta para eliminar un sorteo
router.delete('/:id', sorteoController.deleteSorteo);
// Ruta para obtener todos los sorteos
router.get('/', sorteoController.getAllSorteos);

// Ruta para obtener un sorteo por ID
router.get('/:id', sorteoController.getSorteoById);

// Ruta para actualizar un sorteo
router.put('/:id', sorteoController.updateSorteo);

module.exports = router;
