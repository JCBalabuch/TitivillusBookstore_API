const upload = require('../../middlewares/uploadFiles');
const {
  getEditorials,
  getEditorial,
  createEditorial,
  updateEditorial,
  deleteEditorial,
} = require('../controllers/editorials.controller');

const editorialsRouter = require('express').Router();

editorialsRouter.get('/', getEditorials);
editorialsRouter.get('/get-editorial/:id', getEditorial);
editorialsRouter.post(
  '/create-editorial/',
  upload.single('photo'),
  createEditorial
);
editorialsRouter.put('/update-editorial/:id', updateEditorial);
editorialsRouter.delete('/delete-editorial/:id', deleteEditorial);

module.exports = editorialsRouter;
