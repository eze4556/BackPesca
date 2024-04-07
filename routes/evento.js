// routes/eventoRoutes.js
const express = require('express');
const router = express.Router();
const eventoController = require('../controller/eventoController');

// Ruta para crear un nuevo evento
router.post('/nuevo-evento', eventoController.createEvento);

// Ruta para eliminar un evento
router.delete('/:id', eventoController.deleteEvento);

module.exports = router;
