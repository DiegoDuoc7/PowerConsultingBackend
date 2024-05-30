const mongoose = require('mongoose');
const { Schema } = mongoose;

const aporteSchema = new Schema({
  monto: {
    type: Number,
    required: true
  },
  aportadorId: {
    type: Schema.Types.ObjectId,
    ref: 'Aportador',
    required: true
  },
  fecha: {
    type: Date,
    default: Date.now,
    required: true
  }
});

const Aporte = mongoose.model('Aporte', aporteSchema);

module.exports = Aporte;
