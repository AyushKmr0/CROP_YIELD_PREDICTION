const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  season: {
    type: String,
    required: true
  },
  recommendedLocation: {
    type: String,
    required: true
  }
});

const Crop = mongoose.model('Crop', cropSchema);

module.exports = Crop;