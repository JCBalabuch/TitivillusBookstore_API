require('dotenv').config();
const mongoose = require('mongoose');
const Editorial = require('../../api/models/editorials.model');
const { editorialData } = require('../handleFiles/handleCSV');

const URL = process.env.DDBB_URL;

mongoose
  .connect(URL)
  .then(async () => {
    const allEditorials = await Editorial.find();
    if (allEditorials.length) {
      await Editorial.collection.drop();
    }
  })
  .catch((error) => console.error(`Error deleting data: ${error}`))
  .then(async () => {
    await Editorial.insertMany(editorialData);
  })
  .catch((error) => console.error(`Error creating data: ${error}`))
  .finally(() => mongoose.disconnect());
