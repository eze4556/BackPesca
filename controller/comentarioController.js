// controllers/comentarioController.js
const Comentario = require('../models/Comentario');

// Controlador para agregar un nuevo comentario
exports.createComentario = async (req, res) => {
  try {
    const nuevoComentario = new Comentario(req.body);
    await nuevoComentario.save();
    res.status(201).json({ message: 'Comentario agregado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para eliminar un comentario
exports.deleteComentario = async (req, res) => {
  try {
    const comentarioId = req.params.id;
    const comentario = await Comentario.findByIdAndDelete(comentarioId);
    if (!comentario) {
      return res.status(404).json({ message: 'Comentario no encontrado' });
    }
    res.json({ message: 'Comentario eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
