const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Conexión a MongoDB
const dbURI = 'mongodb+srv://diegod7:wnRKITEJ08jwU7UJ@powerconsulting.zva8cz7.mongodb.net/';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.log(err));

// Modelos
require('./src/models/Employee');
// Rutas
app.use(require('./src/routes/employees.routes'));

app.listen(4000, () => {
    console.log('Servidor corriendo en http://localhost:4000');
});

