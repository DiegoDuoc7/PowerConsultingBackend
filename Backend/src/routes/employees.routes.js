const express = require('express');
const router = express.Router();
const employeesController = require('../controllers/employees.controller');

router.get('/hello', employeesController.hello);

module.exports = router;
