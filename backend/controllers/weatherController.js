const axios = require('axios');

exports.getWeatherData = async (req, res) => {
  const { location } = req.query; // Get location from query parameters

  try {
    const apiKey = process.env.WEATHER_API_KEY; // Add API key to .env file
    const weatherResponse = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);

    const weatherData = weatherResponse.data;
    res.status(200).json(weatherData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching weather data' });
  }
};