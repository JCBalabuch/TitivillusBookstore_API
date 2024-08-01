const fs = require('fs');

fs.readFile('src/utils/handleFiles/books.json', 'utf-8', (err, data) => {
  const books = JSON.parse(data);

  let stringToCsv = '';

  for (const key in books[0]) {
    stringToCsv += `${key}`;
  }

  stringToCsv = stringToCsv.slice(0, stringToCsv.length - 1);

  stringToCsv += '\n';

  for (const book of books) {
    stringToCsv += `${book.title},${book.author},${book.cover},${book.description},${book.editorial},${book.price}\n`;
  }

  fs.writeFile('src/utils/handleFiles/books.csv', stringToCsv, (err, data) => {
    console.log('Procesado correctamente');
  });
});
