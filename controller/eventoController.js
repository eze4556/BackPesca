// controllers/eventoController.js
const Evento = require('../models/evento');

// Controlador para crear un nuevo evento
exports.createEvento = async (req, res) => {
  try {
    const nuevoEvento = new Evento(req.body);
    await nuevoEvento.save();
    res.status(201).json({ message: 'Evento creado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para eliminar un evento
exports.deleteEvento = async (req, res) => {
  try {
    const eventoId = req.params.id;
    const evento = await Evento.findByIdAndDelete(eventoId);
    if (!evento) {
      return res.status(404).json({ message: 'Evento no encontrado' });
    }
    res.json({ message: 'Evento eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
