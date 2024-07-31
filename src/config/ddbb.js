const mongoose = require('mongoose');

const connectDDBB = async () => {
  try {
    await mongoose.connect(process.env.DDBB_URL);
    console.log('Successfully connected to the Database');
  } catch (error) {
    console.error();
    `Error connecting to the Database: ${error}`;
  }
};

module.exports = { connectDDBB };
