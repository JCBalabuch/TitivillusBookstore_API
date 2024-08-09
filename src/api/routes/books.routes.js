const upload = require('../../middlewares/uploadFiles');
const {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
  getBooksByPrice,
} = require('../controllers/books.controller');

const booksRouter = require('express').Router();

booksRouter.get('/', getBooks);
booksRouter.get('/get-book/:id', getBook);
booksRouter.get('/filter-by-price/by-price', getBooksByPrice);
booksRouter.post('/create-book', upload.single('cover'), createBook);
booksRouter.put('/update-book/:id', updateBook);
booksRouter.delete('/delete-book/:id', deleteBook);

module.exports = booksRouter;
