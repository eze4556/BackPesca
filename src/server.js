// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send('¡Backend de tu aplicación de pesca funcionando!');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conexión a MongoDB establecida');
}).catch(err => {
  console.error('Error al conectar a MongoDB:', err.message);
});

// Start server
app.listen(PORT, () => {
  console.log(`Servidor backend en ejecución en http://localhost:${PORT}`);
});
