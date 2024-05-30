const Aporte = require('../models/Aporte');

// Crear un nuevo aporte
exports.createAporte = async (req, res) => {
  try {
    const nuevoAporte = new Aporte(req.body);
    await nuevoAporte.save();
    res.status(201).json(nuevoAporte);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el aporte', error });
  }
};

// Obtener todos los aportes
exports.getAllAportes = async (req, res) => {
  try {
    const aportes = await Aporte.find().populate('aportadorId');
    res.status(200).json(aportes);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los aportes', error });
  }
};

// Obtener un aporte por ID
exports.getAporteById = async (req, res) => {
  try {
    const aporte = await Aporte.findById(req.params.id).populate('aportadorId');
    if (!aporte) {
      return res.status(404).json({ message: 'Aporte no encontrado' });
    }
    res.status(200).json(aporte);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el aporte', error });
  }
};

// Actualizar un aporte
exports.updateAporte = async (req, res) => {
  try {
    const aporteActualizado = await Aporte.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!aporteActualizado) {
      return res.status(404).json({ message: 'Aporte no encontrado' });
    }
    res.status(200).json(aporteActualizado);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar el aporte', error });
  }
};

// Eliminar un aporte
exports.deleteAporte = async (req, res) => {
  try {
    const aporteEliminado = await Aporte.findByIdAndDelete(req.params.id);
    if (!aporteEliminado) {
      return res.status(404).json({ message: 'Aporte no encontrado' });
    }
    res.status(200).json({ message: 'Aporte eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el aporte', error });
  }
};

