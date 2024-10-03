const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const cropRoutes = require('./routes/cropRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// Define routes
app.use('/api/users', userRoutes);
app.use('/api/crops', cropRoutes);

module.exports = app;
