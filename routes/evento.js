// routes/eventoRoutes.js
const express = require('express');
const router = express.Router();
const eventoController = require('../controllers/eventoController');

// Ruta para crear un nuevo evento
router.post('/nuevo-evento', eventoController.createEvento);

// Ruta para eliminar un evento
router.delete('/evento/:id', eventoController.deleteEvento);

module.exports = router;
