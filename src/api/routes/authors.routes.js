const {
  getAuthors,
  getAuthor,
  createAuthor,
  updateAuthor,
  deleteAuthor,
} = require('../controllers/authors.controller');

const authorsRouter = require('express').Router();

authorsRouter.get('/', getAuthors);
authorsRouter.get('/:id', getAuthor);
authorsRouter.post('/', createAuthor);
authorsRouter.put('/:id', updateAuthor);
authorsRouter.delete('/:id', deleteAuthor);

module.exports = authorsRouter;
