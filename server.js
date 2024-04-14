// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
console.log('MONGO_URI:', process.env.MONGO_URI); 


// Importar rutas y controladores
const nuevoProductoRoutes = require('./routes/nuevoProducto');
const eventoRoutes = require('./routes/evento');
const comentarioRoutes = require('./routes/comentarios');
const sorteoRoutes = require('./routes/sorteo');
const producto = require('./routes/producto')
const categoria = require('./routes/categoria')
const quienesSomos = require('./routes/quienesSomos')


const app = express();
const PORT = process.env.PORT || 5000

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send('¡Backend de tu aplicación de pesca funcionando!');
});



// MongoDB Connection
mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

// Usar rutas
app.use('/nuevoProducto', nuevoProductoRoutes);
app.use('/evento', eventoRoutes);
app.use('/comentario', comentarioRoutes);
app.use('/sorteo', sorteoRoutes);
app.use('/producto', producto)
app.use('/categoria',categoria)
app.use('quienesSomos', quienesSomos)


// Start server
app.listen(PORT, () => {
  console.log(`Servidor backend en ejecución en http://localhost:${PORT}`);
});
