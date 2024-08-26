// Imports
require('dotenv').config();
const mongoose = require('mongoose');
const {
  processBooks,
  processAuthors,
  processEditorials,
} = require('../handleFiles/handleCSV');
const bookSeed = require('./books.seed');
const authorSeed = require('./authors.seed');
const editorialSeed = require('./editorials.seed');

// Gets the database URL from environment variables
const URL = process.env.DDBB_URL;

// Function to release all seeds
async function releaseSeeds() {
  try {
    await mongoose.connect(URL);
    console.log('connected with MongoDB');

    // Process CSV data
    const books = await processBooks();
    const authors = await processAuthors(books);
    const editorials = await processEditorials(books, authors);

    // Release seeds
    await bookSeed(books);
    await authorSeed(authors);
    await editorialSeed(editorials);
  } catch (error) {
    // Handling errors when creating data in MongoDB
    console.error(`Error executing seeds: ${error}`);
  } finally {
    // Finish process
    process.exit();
  }
}

releaseSeeds();
