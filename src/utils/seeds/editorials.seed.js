// Imports
const Editorial = require('../../api/models/editorials.model');

// Function to add editorials data in MongoDB
async function editorialSeed(editorialData) {
  try {
    // Search for all existing editorials in the database and delete the entire collection
    const allEditorials = await Editorial.find();

    if (allEditorials.length) {
      console.log('deleting data');
      await Editorial.collection.drop();
      console.log('Data deleted');
    }

    // Insert editorials data into the database
    await Editorial.insertMany(editorialData);
    console.log('Data inserted');
    console.log('Editorials', editorialData);
  } catch (error) {
    console.error(`Error creating data: ${error}`);
  }
}

module.exports = editorialSeed;
