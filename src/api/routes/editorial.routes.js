const {
  getEditorials,
  getEditorial,
  createEditorial,
  updateEditorial,
  deleteEditorial,
} = require('../controllers/editorials.controller');

const editorialsRouter = require('express').Router();

editorialsRouter.get('/', getEditorials);
editorialsRouter.get('/:id', getEditorial);
editorialsRouter.post('/', createEditorial);
editorialsRouter.put('/:id', updateEditorial);
editorialsRouter.delete('/:id', deleteEditorial);

module.exports = editorialsRouter;
