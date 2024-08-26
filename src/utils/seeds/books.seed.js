// Imports
require('dotenv').config();
const mongoose = require('mongoose');
const Book = require('../../api/models/books.model');
const { booksData } = require('../handleFiles/handleCSV');

// Gets the database URL from environment variables
const URL = process.env.DDBB_URL;

// Connect to MongoDB database
mongoose
  .connect(URL)
  .then(async () => {
    console.log('connected with MongoDB');

    // Search for all existing books in the database and delete the entire collection
    const allBooks = await Book.find();
    if (allBooks.length) {
      console.log('deleting data');
      await Book.collection.drop();
    }
    console.log('Data deleted');
  })
  // Handling errors when deleting data
  .catch((error) => console.log(`Error deleting data: ${error}`))
  .then(async () => {
    console.log('Inserting new data');

    // Insert books data into the database
    await Book.insertMany(booksData);
    console.log('Data inserted');
    console.log(booksData);
  })
  // Handling errors when creating data
  .catch((error) => console.log(`Error creating data: ${error}`))
  // Close the connection to MongoDB on completion
  .finally(() => mongoose.disconnect());
