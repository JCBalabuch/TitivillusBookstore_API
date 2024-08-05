require('dotenv').config();
const mongoose = require('mongoose');
const Author = require('../../api/models/authors.model');
const { authorsData } = require('../handleFiles/handleCSV');

const URL = process.env.DDBB_URL;

mongoose
  .connect(URL)
  .then(async () => {
    const allAuthors = await Author.find();
    if (allAuthors.length) {
      await Author.collection.drop();
    }
  })
  .catch((error) => console.error(`Error deleting data: ${error}`))
  .then(async () => {
    await Author.insertMany(authorsData);
  })
  .catch((error) => console.error(`Error creating data: ${error}`))
  .finally(() => mongoose.disconnect());
