const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  puesto: {
    type: String,
    required: true
  },
  salario: {
    type: Number,
    required: true
  },
  fechaContratacion: {
    type: Date,
    default: Date.now
  }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
