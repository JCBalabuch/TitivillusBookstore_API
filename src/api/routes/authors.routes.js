const upload = require('../../middlewares/uploadFiles');
const {
  getAuthors,
  getAuthor,
  createAuthor,
  updateAuthor,
  deleteAuthor,
} = require('../controllers/authors.controller');

const authorsRouter = require('express').Router();

authorsRouter.get('/', getAuthors);
authorsRouter.get('/get-author/:id', getAuthor);
authorsRouter.post('/create-author', upload.single('photo'), createAuthor);
authorsRouter.put('/update-author/:id', updateAuthor);
authorsRouter.delete('/delete-author/:id', deleteAuthor);

module.exports = authorsRouter;
