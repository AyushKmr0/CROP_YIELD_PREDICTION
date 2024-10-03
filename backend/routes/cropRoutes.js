const express = require('express');
const { getAllCrops, addCrop } = require('../controllers/cropController');

const router = express.Router();

// Get all crops
router.get('/', getAllCrops);

// Add new crop
router.post('/add', addCrop);

module.exports = router;