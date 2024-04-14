// controllers/categoriaController.js
const QuienesSomos = require('../models/quienesSomos');



exports.createSomos = async (req, res) => {
  try {
    const nuevoSomos = new QuienesSomos(req.body);
    await nuevoSomos.save();
    res.status(201).json({ message: ' quienes somos agregado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
exports.getSomos = async (req, res) => {
  try {
    const nuevoSomos = await QuienesSomos.find();
    res.json(nuevoSomos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.deleteSomos = async (req, res) => {
  try {
    const quienesSomosId = req.params.id;
    const quienesSomos = await QuienesSomos.findByIdAndDelete(quienesSomosId);
    if (!quienesSomos) {
      return res.status(404).json({ message: 'no encontrado' });
    }
    res.json({ message: ' eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
