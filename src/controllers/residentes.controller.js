/* Start of Selection */
const Residente = require('../models/Residente');

// Crear un nuevo residente
exports.createResidente = async (req, res) => {
    try {
        const nuevoResidente = new Residente(req.body);
        await nuevoResidente.save();
        res.status(201).json(nuevoResidente);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el residente', error });
    }
};

// Obtener todos los residentes
exports.getAllResidentes = async (req, res) => {
    try {
        const residentes = await Residente.find();
        res.status(200).json(residentes);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los residentes', error });
    }
};

// Obtener un residente por ID
exports.getResidenteById = async (req, res) => {
    try {
        const residente = await Residente.findById(req.params.id);
        if (!residente) {
            return res.status(404).json({ message: 'Residente no encontrado' });
        }
        res.status(200).json(residente);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el residente', error });
    }
};

// Actualizar un residente
exports.updateResidente = async (req, res) => {
    try {
        const residenteActualizado = await Residente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!residenteActualizado) {
            return res.status(404).json({ message: 'Residente no encontrado' });
        }
        res.status(200).json(residenteActualizado);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el residente', error });
    }
};

// Eliminar un residente
exports.deleteResidente = async (req, res) => {
    try {
        const residenteEliminado = await Residente.findByIdAndDelete(req.params.id);
        if (!residenteEliminado) {
            return res.status(404).json({ message: 'Residente no encontrado' });
        }
        res.status(200).json({ message: 'Residente eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el residente', error });
    }
};
/* End of Selection */
