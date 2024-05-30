// Start of Selection
const express = require('express');
const router = express.Router();
const aporteController = require('../controllers/aporte.controller');

router.post('/', aporteController.createAporte);
router.get('/', aporteController.getAllAportes);
router.get('/:id', aporteController.getAporteById);
router.put('/:id', aporteController.updateAporte);
router.delete('/:id', aporteController.deleteAporte);
module.exports = router;
