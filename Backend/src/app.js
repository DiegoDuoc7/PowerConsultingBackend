const express = require('express');
const morgan = require('morgan');
const employeeRoutes = require('./routes/employees.routes');

const app = express();

app.set('port', 4000);
app.use(morgan('dev'));
app.use('/', employeeRoutes);

module.exports = app;
