const mongoose = require('mongoose');
const { Schema } = mongoose;

const aportadorSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  rut: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  monto: {
    type: Number,
    required: true
  },
  tarjeta: {
    type: String,
    required: true
  },
  fechaInicio: {
    type: Date,
    required: true
  }
});

const Aportador = mongoose.model('Aportador', aportadorSchema);

module.exports = Aportador;

