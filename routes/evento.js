// routes/eventoRoutes.js
const express = require('express');
const router = express.Router();
const eventoController = require('../controller/eventoController');

router.get('/', eventoController.getAllEventos);
router.get('/:id', eventoController.getEventoById);
// Ruta para crear un nuevo evento
router.post('/', eventoController.createEvento);

router.put('/:id', eventoController.updateEvento);
// Ruta para eliminar un evento
router.delete('/:id', eventoController.deleteEvento);

module.exports = router;

