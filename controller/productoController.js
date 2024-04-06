// controllers/productoController.js
const Producto = require('../models/producto');

// Controlador para obtener todos los productos
exports.getAllProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controlador para crear un nuevo producto
exports.createProducto = async (req, res) => {
  const producto = new Producto({
    nombre: req.body.nombre,
    imagen: req.body.imagen,
    precio: req.body.precio,
    descuento: req.body.descuento || 0,
    precioFinal: req.body.precio - (req.body.descuento || 0)
  });

  try {
    const nuevoProducto = await producto.save();
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controlador para obtener un producto por su ID
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

// Controlador para actualizar un producto
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

// Controlador para eliminar un producto
exports.deleteProducto = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (producto == null) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    await producto.remove();
    res.json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
