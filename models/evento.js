// models/Evento.js

const mongoose = require('mongoose');

const eventoSchema = new mongoose.Schema({
  foto: { type: String},
  descripcion: { type: String, required: true }
});

module.exports = mongoose.model('Evento', eventoSchema);

