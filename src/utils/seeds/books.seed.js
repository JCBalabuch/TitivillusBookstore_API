require('dotenv').config();
const mongoose = require('mongoose');
const Book = require('../../api/models/books.model');
const { booksData } = require('../handleFiles/handleCSV');

const URL = process.env.DDBB_URL;

mongoose
  .connect(URL)
  .then(async () => {
    const allBooks = await Book.find();
    if (allBooks.length) {
      await Book.collection.drop();
    }
  })
  .catch((error) => console.log(`Error deleting data: ${error}`))
  .then(async () => {
    await Book.insertMany(booksData);
  })
  .catch((error) => console.log(`Error creating data: ${error}`))
  .finally(() => mongoose.disconnect());
