// routes/sorteoRoutes.js
const express = require('express');
const router = express.Router();
const sorteoController = require('../controller/sorteoController');

// Ruta para crear un nuevo sorteo
router.post('/nuevo-sorteo', sorteoController.createSorteo);

// Ruta para eliminar un sorteo
router.delete('/sorteo/:id', sorteoController.deleteSorteo);

module.exports = router;
