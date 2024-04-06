// models/Producto.js
const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  imagen: { type: String, required: true },
  precio: { type: Number, required: true },
  descuento: { type: Number, default: 0 },
  precioFinal: { type: Number, required: true }
});

module.exports = mongoose.model('Producto', productoSchema);
