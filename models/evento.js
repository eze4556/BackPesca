// models/Evento.js

const mongoose = require('mongoose');

const eventoSchema = new mongoose.Schema({
  foto: { type: String},
  nombre: { type: String},
  fecha: { type: Date},
  descripcion: { type: String, required: true }
});

module.exports = mongoose.model('Evento', eventoSchema);

