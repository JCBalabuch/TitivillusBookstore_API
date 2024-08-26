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
    console.log('connected with MongoDB');
    // Search for all existing editorials in the database and delete the entire collection
    const allEditorials = await Editorial.find();
    if (allEditorials.length) {
      console.log('deleting data');
      await Editorial.collection.drop();
    }
    console.log('Data deleted');
  })
  // Handling errors when deleting data
  .catch((error) => console.error(`Error deleting data: ${error}`))
  .then(async () => {
    console.log('Inserting new data');

    // Insert editorials data into the database
    await Editorial.insertMany(editorialData);
    console.log('Data inserted');
    console.log(editorialData);
  })
  // Handling errors when creating data
  .catch((error) => console.error(`Error creating data: ${error}`))
  // Close the connection to MongoDB on completion
  .finally(() => mongoose.disconnect());
