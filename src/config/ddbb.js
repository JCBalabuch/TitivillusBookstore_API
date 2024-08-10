// Imports
const mongoose = require('mongoose');

// Function to connect to Data Base
const connectDDBB = async () => {
  try {
    await mongoose.connect(process.env.DDBB_URL);
    console.log('Successfully connected to the Database');
  } catch (error) {
    console.error();
    `Error connecting to the Database: ${error}`;
  }
};

// Exports
module.exports = { connectDDBB };
