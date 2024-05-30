const Aportador = require('../models/Aportador');

// Crear un nuevo aportador
exports.createAportador = async (req, res) => {
    try {
        const nuevoAportador = new Aportador(req.body);
        await nuevoAportador.save();
        res.status(201).json(nuevoAportador);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el aportador', error });
    }
};

// Obtener todos los aportadores
exports.getAportadores = async (req, res) => {
    try {
        const aportadores = await Aportador.find();
        res.status(200).json(aportadores);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los aportadores', error });
    }
};

// Obtener un aportador por ID
exports.getAportadorById = async (req, res) => {
    try {
        const aportador = await Aportador.findById(req.params.id);
        if (!aportador) {
            return res.status(404).json({ message: 'Aportador no encontrado' });
        }
        res.status(200).json(aportador);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el aportador', error });
    }
};

// Actualizar un aportador por ID
exports.updateAportador = async (req, res) => {
    try {
        const aportadorActualizado = await Aportador.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!aportadorActualizado) {
            return res.status(404).json({ message: 'Aportador no encontrado' });
        }
        res.status(200).json(aportadorActualizado);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el aportador', error });
    }
};

// Eliminar un aportador por ID
exports.deleteAportador = async (req, res) => {
    try {
        const aportadorEliminado = await Aportador.findByIdAndDelete(req.params.id);
        if (!aportadorEliminado) {
            return res.status(404).json({ message: 'Aportador no encontrado' });
        }
        res.status(200).json({ message: 'Aportador eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el aportador', error });
    }
};
