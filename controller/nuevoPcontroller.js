// controllers/nuevoProductoController.js
const NuevoProducto = require('../models/nuevoProducto');
const Categoria = require('../models/categoria');








exports.createNuevoProducto = async (req, res) => {
  try {

      // Obtiene las categorías seleccionadas del cuerpo de la solicitud
    const categoriasSeleccionadas = req.body.categorias;

   // Agrega el console.log para imprimir req.body
    console.log('Datos del cuerpo de la solicitud:', req.body);

    const producto = new NuevoProducto({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      imagen: req.file.filename,
      precio: req.body.precio,
      descuento: req.body.descuento || 0,
      precioFinal: req.body.precio - (req.body.descuento || 0),
      categorias: categoriasSeleccionadas 
    });

    // Guarda el producto en la base de datos
    const nuevoProducto = await producto.save();

     // Asocia el producto con las categorías seleccionadas
    if (categoriasSeleccionadas && categoriasSeleccionadas.length > 0) {
      await Categoria.updateMany({ _id: { $in: categoriasSeleccionadas } }, { $push: { productos: nuevoProducto._id } });
    }

    res.status(201).json({ message: 'Nuevo Producto agregado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para crear un nuevo producto
// exports.createNuevoProducto = async (req, res) => {
//   try {
//     // Obtiene las categorías seleccionadas del cuerpo de la solicitud
//     const categoriasSeleccionadas = req.body.categorias;

//    // Agrega el console.log para imprimir req.body
//     console.log('Datos del cuerpo de la solicitud:', req.body);

//     // Crea un nuevo producto con los datos proporcionados
//     const NuevoProducto = new NuevoProducto({
//       nombre: req.body.nombre,
//       imagen: req.file.filename,
//       precio: req.body.precio,
//       descuento: req.body.descuento || 0,
//       precioFinal: req.body.precio - (req.body.descuento || 0),
//       categorias: categoriasSeleccionadas 
//     });

//     // Guarda el producto en la base de datos
//     const nuevoProducto = await producto.save();

//     // Asocia el producto con las categorías seleccionadas
//     if (categoriasSeleccionadas && categoriasSeleccionadas.length > 0) {
//       await Categoria.updateMany({ _id: { $in: categoriasSeleccionadas } }, { $push: { productos: nuevoProducto._id } });
//     }

//     res.status(201).json(nuevoProducto);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };



exports.getAllProductos = async (req, res) => {
  try {
    const NuevoProductos = await NuevoProducto.find();
    res.json(NuevoProductos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProductoById = async (req, res) => {
  try {
    
    const producto = await NuevoProducto.findById(req.params.id);
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(producto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controlador para obtener un producto por su ID
exports.getProductoByCategoriaId = async (req, res) => {
  try {
    const categoriaId = req.params.id; // Obtenemos el ID de la categoría de la solicitud
    const Nuevoproducto = await NuevoProducto.find({ categorias: categoriaId }); // Buscamos productos que tengan la categoría con el ID proporcionado
    res.json(Nuevoproducto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProducto = async (req, res) => {
  try {
    const NuevoProducto = await NuevoProducto.findById(req.params.id);
    if (NuevoProducto == null) {
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

exports.deleteProducto = async (req, res) => {
  try {
    const nuevoProducto = await NuevoProducto.findById(req.params.id);
    if (nuevoProducto == null) {
      return res.status(404).json({ message: 'Nuevo Producto no encontrado' });
    }
    await nuevoProducto.deleteOne({ _id: req.params.id });
    res.json({ message: 'Nuevo Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
