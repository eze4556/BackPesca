// routes/eventoRoutes.js
const express = require('express');
const router = express.Router();
const eventoController = require('../controller/eventoController');
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads'); // Directorio donde se almacenarán las imágenes de categorías
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Nombre de la imagen
  }
});

const upload = multer({ storage: storage });

// Ruta para crear un nuevo evento con la carga de imagen
router.post('/', upload.single('imagen'), eventoController.createEvento);


router.get('/', eventoController.getAllEventos);
router.get('/:id', eventoController.getEventoById);
// Ruta para crear un nuevo evento

router.put('/:id', eventoController.updateEvento);
// Ruta para eliminar un evento
router.delete('/:id', eventoController.deleteEvento);

module.exports = router;

