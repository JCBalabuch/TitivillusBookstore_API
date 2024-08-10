// Imports
const fs = require('fs');
const csv = require('csv-parser');
const Book = require('../../api/models/books.model');
const Author = require('../../api/models/authors.model');
const Editorial = require('../../api/models/editorials.model');

// Declare empy arrays to store data from CSV files
const booksData = [];
const authorsData = [];
const editorialData = [];

// Paths to CSV files
const booksURL = 'src/utils/handleFiles/TtvBS-BooksData.csv';
const authorsURL = 'src/utils/handleFiles/TtvBS-AuthorsData.csv';
const editorialsURL = 'src/utils/handleFiles/TtvBS-EditorialsData.csv';

// Function to read and process CSV data
const readerCSV = async (url, model) => {
  // Create a read stream
  fs.createReadStream(url)
    // Specify semicolon (;) as the CSV field separator
    .pipe(csv({ separator: ';' }))
    // Handle each row of data from the CSV file
    .on('data', (row) => {
      // Create an empty object to store cleaned data
      const cleanedRow = {};

      // Clean the row data by trimming whitespace from each key
      for (const key in row) {
        cleanedRow[key.trim()] = row[key];
      }

      // Process the data based on the specified model
      // Create a new Book object from the cleaned data
      switch (model) {
        case 'books':
          const newBook = new Book({
            title: cleanedRow.title,
            author: cleanedRow.author,
            cover: cleanedRow.cover,
            description: cleanedRow.description,
            editorial: cleanedRow.editorial,
            price: cleanedRow.price,
          });

          booksData.push(newBook);

          break;

        // Create a new Author object from the cleaned data
        case 'authors':
          // Find all books by this author's name in the booksData array
          const bookIdsByAuthors = booksData
            .filter((book) => book.author === cleanedRow.name)
            .map((book) => book._id);

          // Create a new Author object from the cleaned data
          const newAuthor = new Author({
            name: cleanedRow.name,
            photo: cleanedRow.photo,
            biography: cleanedRow.biography,
            books: bookIdsByAuthors, // Assign the extracted book IDs to the 'books' field
          });

          authorsData.push(newAuthor);

          break;

        // Create a new Editorial object from the cleaned data
        case 'editorials':
          // Find all books associated with this editorial name in the booksData array
          const bookIdsByEditorials = booksData
            .filter((book) => book.editorial === cleanedRow.name)
            .map((book) => book._id);

          // Find authors of those books
          const authorIdsByEditorials = booksData
            .filter((book) => book.editorial === cleanedRow.name)
            .map((book) => {
              const author = authorsData.find(
                (author) => author.name === book.author
              );
              return author._id;
            });

          // Create a new Editorial object from the cleaned data
          const newEditorial = new Editorial({
            name: cleanedRow.name,
            logo: cleanedRow.logo,
            description: cleanedRow.description,
            country: cleanedRow.country,
            books: bookIdsByEditorials, // Assign the extracted book IDs to the 'books' field
            authors: authorIdsByEditorials, // Assign the extracted author IDs to the 'authors' field
          });

          editorialData.push(newEditorial);

          break;

        default:
          console.error('Unknow model', model);
          break;
      }
    })
    .on('end', async () => {
      process.exit();
    });
};

// Execute the function to create each collection
readerCSV(booksURL, 'books');
readerCSV(authorsURL, 'authors');
readerCSV(editorialsURL, 'editorials');

// Exports
module.exports = {
  booksData,
  authorsData,
  editorialData,
};
