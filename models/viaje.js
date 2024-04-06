// models/Viaje.js
const mongoose = require('mongoose');

const viajeSchema = new mongoose.Schema({
  foto: { type: String, required: true },
  descripcion: { type: String, required: true }
});

module.exports = mongoose.model('Viaje', viajeSchema);
