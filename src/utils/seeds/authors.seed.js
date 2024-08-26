// Imports
require('dotenv').config();
const mongoose = require('mongoose');
const Author = require('../../api/models/authors.model');
const { authorsData } = require('../handleFiles/handleCSV');

// Gets the database URL from environment variables
const URL = process.env.DDBB_URL;

// Connect to MongoDB database
mongoose
  .connect(URL)
  .then(async () => {
    console.log('connected with MongoDB');

    // Search for all existing authors in the database and delete the entire collection
    const allAuthors = await Author.find();
    if (allAuthors.length) {
      console.log('deleting data');
      await Author.collection.drop();
    }
    console.log('Data deleted');
  })
  // Handling errors when deleting data
  .catch((error) => console.error(`Error deleting data: ${error}`))
  .then(async () => {
    console.log('Inserting new data');

    // Insert authors data into the database
    await Author.insertMany(authorsData);
    console.log('Data inserted');
    console.log(authorsData);
  })
  // Handling errors when creating data
  .catch((error) => console.error(`Error creating data: ${error}`))
  // Close the connection to MongoDB on completion
  .finally(() => mongoose.disconnect());
