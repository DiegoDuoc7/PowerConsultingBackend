
const express = require('express');
const Residente = require('../models/Residente');
const residentesController = require('../controllers/residentes.controller');

const router = express.Router();

// Crear un nuevo residente
router.post('/', residentesController.createResidente);

// Obtener todos los residentes
router.get('/', residentesController.getAllResidentes);

// Obtener un residente por ID
router.get('/:id', residentesController.getResidenteById);

// Actualizar un residente
router.put('/:id', residentesController.updateResidente);

// Eliminar un residente
router.delete('/:id', residentesController.deleteResidente);

module.exports = router;
