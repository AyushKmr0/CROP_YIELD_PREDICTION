const express = require('express');
const { getWeatherData } = require('../controllers/weatherController');

const router = express.Router();

// Get weather data by location
router.get('/current', getWeatherData);

module.exports = router;