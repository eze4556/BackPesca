// models/Sorteo.js
const mongoose = require('mongoose');

const sorteoSchema = new mongoose.Schema({
  foto: { type: String, required: true },
  titulo: { type: String, required: true },
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true }
});

module.exports = mongoose.model('Sorteo', sorteoSchema);
