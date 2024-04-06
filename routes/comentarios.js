// routes/comentarioRoutes.js
const express = require('express');
const router = express.Router();
const comentarioController = require('../controllers/comentarioController');

// Ruta para agregar un nuevo comentario
router.post('/nuevo-comentario', comentarioController.createComentario);

// Ruta para eliminar un comentario
router.delete('/comentario/:id', comentarioController.deleteComentario);

module.exports = router;
