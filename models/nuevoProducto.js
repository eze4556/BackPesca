// models/NuevoProducto.js
const mongoose = require('mongoose');

const nuevoProductoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  imagen: { type: String, required: true },
  precio: { type: Number, required: true },
  descuento: { type: Number, default: 0 },
  precioFinal: { type: Number, required: true }
});

module.exports = mongoose.model('NuevoProducto', nuevoProductoSchema);
