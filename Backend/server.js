const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/PowerConsulting', { useNewUrlParser: true, useUnifiedTopology: true });

// Modelos
require('./models/Empleado');
require('./models/Proyecto');

// Rutas
app.use(require('./routes'));

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});

