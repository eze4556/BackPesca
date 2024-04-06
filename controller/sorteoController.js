// controllers/sorteoController.js
const Sorteo = require('../models/sorteo');

// Controlador para crear un nuevo sorteo
exports.createSorteo = async (req, res) => {
  try {
    const nuevoSorteo = new Sorteo(req.body);
    await nuevoSorteo.save();
    res.status(201).json({ message: 'Sorteo creado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para eliminar un sorteo
exports.deleteSorteo = async (req, res) => {
  try {
    const sorteoId = req.params.id;
    const sorteo = await Sorteo.findByIdAndDelete(sorteoId);
    if (!sorteo) {
      return res.status(404).json({ message: 'Sorteo no encontrado' });
    }
    res.json({ message: 'Sorteo eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
