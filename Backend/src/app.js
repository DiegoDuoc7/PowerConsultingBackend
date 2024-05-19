const express = require('express');

const morgan = require('morgan');

const employeeRoutes = require('./routes/employees.routes');
const projectRoutes = require('./routes/projects.routes');

const app = express();

app.set('port', 4000);

app.use(morgan('dev'));

app.use('/', employeeRoutes);
app.use('/', projectRoutes);

module.exports = app;
module.exports = app;