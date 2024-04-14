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

exports.getAllProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProductoById = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (producto == null) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(producto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProducto = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (producto == null) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    if (req.body.nombre != null) {
      producto.nombre = req.body.nombre;
    }
    if (req.body.imagen != null) {
      producto.imagen = req.body.imagen;
    }
    if (req.body.precio != null) {
      producto.precio = req.body.precio;
    }
    if (req.body.descuento != null) {
      producto.descuento = req.body.descuento;
      producto.precioFinal = req.body.precio - req.body.descuento;
    }
    const productoActualizado = await producto.save();
    res.json(productoActualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
