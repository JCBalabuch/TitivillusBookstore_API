const {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} = require('../controllers/books.controller');

const booksRouter = require('express').Router();

booksRouter.get('/', getBooks);
booksRouter.get('/:id', getBook);
booksRouter.post('/', createBook);
booksRouter.put('/:id', updateBook);
booksRouter.delete('/:id', deleteBook);

module.exports = booksRouter;
