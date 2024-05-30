const express = require('express');
const router = express.Router();
const aportadoresController = require('../controllers/aportadores.controller');

// Crear un nuevo aportador
router.post('/', aportadoresController.createAportador);

// Obtener todos los aportadores
router.get('/', aportadoresController.getAportadores);

// Obtener un aportador por ID
router.get('/:id', aportadoresController.getAportadorById);

// Actualizar un aportador
router.put('/:id', aportadoresController.updateAportador);

// Eliminar un aportador
router.delete('/:id', aportadoresController.deleteAportador);

module.exports = router;
