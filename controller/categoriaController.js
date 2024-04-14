// controllers/categoriaController.js
const Categoria = require('../models/categoria');


exports.createCategoria = async (req, res) => {
  try {
    const nuevoCategoria = new Categoria(req.body);
    await nuevoCategoria.save();
    res.status(201).json({ message: 'Categoria agregado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.deleteCategoria = async (req, res) => {
  try {
    const categoriaId = req.params.id;
    const categoria = await Categoria.findByIdAndDelete(categoriaId);
    if (!categoria) {
      return res.status(404).json({ message: 'Categoria no encontrado' });
    }
    res.json({ message: 'Categoria eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.find();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCategoriaById = async (req, res) => {
  try {
    const categoria = await Categoria.findById(req.params.id);
    if (categoria == null) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateCategoria = async (req, res) => {
  try {
    const categoria = await Categoria.findById(req.params.id);
    if (categoria == null) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }
    if (req.body.nombre != null) {
      categoria.nombre = req.body.nombre;
    }
    if (req.body.foto != null) {
      categoria.foto = req.body.foto;
    }
    const categoriaActualizada = await categoria.save();
    res.json(categoriaActualizada);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
