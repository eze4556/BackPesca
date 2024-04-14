// routes/comentarioRoutes.js
const express = require('express');
const router = express.Router();
const comentarioController = require('../controller/comentarioController');

// Ruta para agregar un nuevo comentario
router.post('/', comentarioController.createComentario);

// Ruta para eliminar un comentario
router.delete('/:id', comentarioController.deleteComentario);

module.exports = router;
