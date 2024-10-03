const app = require('./app');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');

// Load environment variables 
dotenv.config({ path:"backend/config/config.env"});

//connecting to database
connectDB();

const PORT = process.env.PORT || 5000; // Default port - 5000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
