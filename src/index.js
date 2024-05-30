const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
app.use(cors({
    origin: '*', // Aquí puedes especificar dominios específicos en lugar de '*' para mayor seguridad
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Conexión a MongoDB
const dbURI = 'mongodb+srv://diegod7:wnRKITEJ08jwU7UJ@powerconsulting.zva8cz7.mongodb.net/';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.log(err));

// Modelos
require('./models/Employee');
require('./models/Project');
require('./models/User');

// Rutas
const employeeRoutes = require('./routes/employees.routes');
const projectRoutes = require('./routes/projects.routes');
const userRoutes = require('./routes/user.routes');

app.use('/employees', employeeRoutes);
app.use('/projects', projectRoutes);
app.use('/users', userRoutes);

app.listen(4000, () => {
    console.log('Servidor corriendo en http://localhost:4000');
});
