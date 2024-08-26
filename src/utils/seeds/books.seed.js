// Imports
const Book = require('../../api/models/books.model');

// Function to add books data in MongoDB
async function bookSeed(booksData) {
  try {
    // Search for all existing books in the database and delete the entire collection
    const allBooks = await Book.find();

    if (allBooks.length) {
      console.log('deleting data');
      await Book.collection.drop();
      console.log('Data deleted');
    }

    console.log('Inserting new data');

    // Insert books data into the database
    await Book.insertMany(booksData);
    console.log('Data inserted');
    console.log('Books', booksData);
  } catch (error) {
    console.error(`Error creating data: ${error}`);
  }
}

module.exports = bookSeed;
