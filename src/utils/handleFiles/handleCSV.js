const fs = require('fs');
const csv = require('csv-parser');
const Book = require('../../api/models/books.model');
const Author = require('../../api/models/authors.model');
const Editorial = require('../../api/models/editorials.model');

const booksData = [];
const authorsData = [];
const editorialData = [];

const booksURL = 'src/utils/handleFiles/TtvBS-BooksData.csv';
const authorsURL = 'src/utils/handleFiles/TtvBS-AuthorsData.csv';
const editorialsURL = 'src/utils/handleFiles/TtvBS-EditorialsData.csv';

const readerCSV = async (url, model) => {
  fs.createReadStream(url)
    .pipe(csv({ separator: ';' }))
    .on('data', (row) => {
      const cleanedRow = {};

      for (const key in row) {
        cleanedRow[key.trim()] = row[key];
      }

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

        case 'authors':
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

          break;

        case 'editorials':
          const bookIdsByEditorials = booksData
            .filter((book) => book.editorial === cleanedRow.name)
            .map((book) => book._id);

          const authorIdsByEditorials = booksData
            .filter((book) => book.editorial === cleanedRow.name)
            .map((book) => {
              const author = authorsData.find(
                (author) => author.name === book.author
              );
              return author._id;
            });

          const newEditorial = new Editorial({
            name: cleanedRow.name,
            logo: cleanedRow.logo,
            description: cleanedRow.description,
            country: cleanedRow.country,
            books: bookIdsByEditorials,
            authors: authorIdsByEditorials,
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

readerCSV(booksURL, 'books');
readerCSV(authorsURL, 'authors');
readerCSV(editorialsURL, 'editorials');

module.exports = {
  booksData,
  authorsData,
  editorialData,
};
