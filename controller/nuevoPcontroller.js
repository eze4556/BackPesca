// controllers/nuevoProductoController.js
const NuevoProducto = require('../models/nuevoProducto');

// Controlador para crear un nuevo producto
exports.createNuevoProducto = async (req, res) => {
  try {
    const nuevoProducto = new NuevoProducto(req.body);
    await nuevoProducto.save();
    res.status(201).json({ message: 'Producto creado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
