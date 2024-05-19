const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  porcentajeAvance: { type: Number, default: 0 },
  notas: [{
    nota: String,
    fecha: { type: Date, default: Date.now }
  }],
  empleado: { type: Schema.Types.ObjectId, ref: 'Employee' }
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;

