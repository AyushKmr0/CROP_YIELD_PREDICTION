const Crop = require('../models/Crop');

// Get all crops
exports.getAllCrops = async (req, res) => {
  try {
    const crops = await Crop.find();
    res.status(200).json(crops);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Add new crop
exports.addCrop = async (req, res) => {
  const { name, type, season, recommendedLocation } = req.body;
  try {
    const newCrop = new Crop({ name, type, season, recommendedLocation });
    await newCrop.save();
    res.status(201).json({ message: 'Crop added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};