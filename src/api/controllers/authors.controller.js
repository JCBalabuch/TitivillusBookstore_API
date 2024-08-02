const Author = require('../models/authors.model');

const getAuthors = async (req, res, next) => {
  try {
    const authors = await Author.find().populate('books');
    return res.status(200).json(authors);
  } catch (error) {
    return res.status(400).json(`Error getting authors: ${error}`);
  }
};

const getAuthor = async (req, res, next) => {
  try {
    const { id } = req.params;

    const author = await Author.findById(id).populate('books');

    if (!author) {
      return res.status(404).json('Author not found');
    }

    return res.status(200).json(author);
  } catch (error) {
    return res.status(400).json(`Error getting the author: ${error}`);
  }
};

const createAuthor = async (req, res, next) => {
  try {
    const { name } = req.body;

    const existingAuthor = await Author.findOne({ name });

    if (existingAuthor) {
      return res.status(400).json(`The author ${name}, already exists.`);
    }

    const newAuthor = new Author(req.body);
    const authorSaved = await newAuthor.save();

    return res.status(201).json(authorSaved);
  } catch (error) {
    return res.status(400).json(`Error creating the author: ${error}`);
  }
};

const updateAuthor = async (req, res, next) => {
  try {
    const { id } = req.params;

    const authorUpdated = await Author.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    return res.status(201).json(authorUpdated);
  } catch (error) {
    return res.status(400).json(`Error updating the author: ${error}`);
  }
};

const deleteAuthor = async (req, res, next) => {
  try {
    const { id } = req.params;

    const authorDeleted = await Author.findByIdAndDelete(id);

    if (!authorDeleted) {
      return res.status(404).json('Author not found');
    }

    return res.status(200).json({
      message: 'Author has been deleted',
      element: authorDeleted,
    });
  } catch (error) {
    return res.status(400).json(`Error deleting the author: ${error}`);
  }
};

module.exports = {
  getAuthors,
  getAuthor,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
