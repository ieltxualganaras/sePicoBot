const mongoose = require('mongoose');

const puntoSchema = new mongoose.Schema({
    user: String,
    puntos: Number
  });

export const Puntos = mongoose.model('Puntos', puntoSchema);
