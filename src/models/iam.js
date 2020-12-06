const mongoose = require('mongoose');

const iamSchema = new mongoose.Schema({
    who: String,
    instagram: String,
  });

export const Iam = mongoose.model('Iam', iamSchema);
