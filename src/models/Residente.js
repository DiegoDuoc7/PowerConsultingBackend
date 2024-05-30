const mongoose = require('mongoose');
const { Schema } = mongoose;

const ResidenteSchema = new mongoose.Schema({
  nombre: String,
  edad: Number,
  familiares: [String],
  medicamentos: [String],
  salud: String,
  cuidadosEspeciales: String,
});

const Residente = mongoose.model('Residente', ResidenteSchema);

module.exports = Residente;

