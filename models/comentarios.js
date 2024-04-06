// models/Comentario.js
const mongoose = require('mongoose');

const comentarioSchema = new mongoose.Schema({
  comentario: { type: String, required: true },
  puntuacion: { type: Number, required: true }
});

module.exports = mongoose.model('Comentario', comentarioSchema);
