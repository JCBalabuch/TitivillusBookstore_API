// Imports
const fs = require('fs');
const csv = require('csv-parser');
const Book = require('../../api/models/books.model');
const Author = require('../../api/models/authors.model');
const Editorial = require('../../api/models/editorials.model');

// Paths to CSV files
const booksURL = 'src/utils/handleFiles/TtvBS-BooksData.csv';
const authorsURL = 'src/utils/handleFiles/TtvBS-AuthorsData.csv';
const editorialsURL = 'src/utils/handleFiles/TtvBS-EditorialsData.csv';

// Function to read and process CSV data for Books
const processBooks = async () => {
  const booksData = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(booksURL)
      .pipe(csv({ separator: ';' }))
      .on('data', (row) => {
        const cleanedRow = {};
        for (const key in row) {
          cleanedRow[key.trim()] = row[key];
        }
        const newBook = new Book({
          title: cleanedRow.title,
          author: cleanedRow.author,
          cover: cleanedRow.cover,
          description: cleanedRow.description,
          editorial: cleanedRow.editorial,
          price: cleanedRow.price,
        });
        booksData.push(newBook);
      })
      .on('end', () => {
        resolve(booksData);
      })
      .on('error', (error) => reject(error));
  });
};

// Function to read and process CSV data for Authors
const processAuthors = async (booksData) => {
  const authorsData = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(authorsURL)
      .pipe(csv({ separator: ';' }))
      .on('data', (row) => {
        const cleanedRow = {};
        for (const key in row) {
          cleanedRow[key.trim()] = row[key];
        }

        const bookIdsByAuthors = booksData
          .filter((book) => book.author === cleanedRow.name)
          .map((book) => book._id);

        const newAuthor = new Author({
          name: cleanedRow.name,
          photo: cleanedRow.photo,
          biography: cleanedRow.biography,
          books: bookIdsByAuthors,
        });

        authorsData.push(newAuthor);
      })
      .on('end', () => {
        resolve(authorsData);
      })
      .on('error', (error) => reject(error));
  });
};

// Function to read and process CSV data for Editorials
const processEditorials = async (booksData, authorsData) => {
  const editorialData = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(editorialsURL)
      .pipe(csv({ separator: ';' }))
      .on('data', (row) => {
        const cleanedRow = {};
        for (const key in row) {
          cleanedRow[key.trim()] = row[key];
        }

        const bookIdsByEditorials = booksData
          .filter((book) => book.editorial === cleanedRow.name)
          .map((book) => book._id);

        const authorIdsByEditorials = booksData
          .filter((book) => book.editorial === cleanedRow.name)
          .map((book) => {
            const author = authorsData.find(
              (author) => author.name === book.author
            );
            return author ? author._id : null;
          })
          .filter(Boolean);

        const newEditorial = new Editorial({
          name: cleanedRow.name,
          logo: cleanedRow.logo,
          description: cleanedRow.description,
          country: cleanedRow.country,
          books: bookIdsByEditorials,
          authors: authorIdsByEditorials,
        });

        editorialData.push(newEditorial);
      })
      .on('end', () => {
        resolve(editorialData);
      })
      .on('error', (error) => reject(error));
  });
};

// Export the functions for use in other components
module.exports = { processBooks, processAuthors, processEditorials };
