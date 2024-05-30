const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://diegod7:wnRKITEJ08jwU7UJ@powerconsulting.zva8cz7.mongodb.net/';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a la base de datos'))
  .catch(err => console.error('Error al conectar a la base de datos:', err));
