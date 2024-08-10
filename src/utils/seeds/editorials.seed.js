// Imports
require('dotenv').config();
const mongoose = require('mongoose');
const Editorial = require('../../api/models/editorials.model');
const { editorialData } = require('../handleFiles/handleCSV');

// Gets the database URL from environment variables
const URL = process.env.DDBB_URL;

// Connect to MongoDB database
mongoose
  .connect(URL)
  .then(async () => {
    // Search for all existing editorials in the database and delete the entire collection
    const allEditorials = await Editorial.find();
    if (allEditorials.length) {
      await Editorial.collection.drop();
    }
  })
  // Handling errors when deleting data
  .catch((error) => console.error(`Error deleting data: ${error}`))
  .then(async () => {
    // Insert editorials data into the database
    await Editorial.insertMany(editorialData);
  })
  // Handling errors when creating data
  .catch((error) => console.error(`Error creating data: ${error}`))
  // Close the connection to MongoDB on completion
  .finally(() => mongoose.disconnect());
