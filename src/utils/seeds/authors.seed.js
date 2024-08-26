// Imports
const Author = require('../../api/models/authors.model');

// Function to add authors data in MongoDB
async function authorSeed(authorsData) {
  try {
    // Search for all existing authors in the database and delete the entire collection
    const allAuthors = await Author.find();

    if (allAuthors.length) {
      console.log('deleting data');
      await Author.collection.drop();
      console.log('Data deleted');
    }

    // Insert authors data into the database
    await Author.insertMany(authorsData);
    console.log('Data inserted');
    console.log('Authors', authorsData);
  } catch (error) {
    console.error(`Error creating data: ${error}`);
  }
}

module.exports = authorSeed;
