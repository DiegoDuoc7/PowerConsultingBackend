const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

// Conexión a MongoDB
const dbURI = 'mongodb+srv://diegod7:wnRKITEJ08jwU7UJ@powerconsulting.zva8cz7.mongodb.net/';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.log(err));

// Modelos
require('./src/models/Employee');
require('./src/models/Project');
require('./src/models/User');

// Rutas
const employeeRoutes = require('./src/routes/employees.routes');
const projectRoutes = require('./src/routes/projects.routes');
const userRoutes = require('./src/routes/user.routes');

app.use('/', employeeRoutes);
app.use('/', projectRoutes);
app.use('/', userRoutes);

app.listen(4000, () => {
    console.log('Servidor corriendo en http://localhost:4000');
});
