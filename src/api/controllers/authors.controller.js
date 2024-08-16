// Imports
const { deleteFile } = require('../../utils/deleteFiles');
const Author = require('../models/authors.model');

// Function to get all authors
const getAuthors = async (req, res, next) => {
  try {
    // Find all authors
    const authors = await Author.find().populate('books');

    // Ok response finding the authors
    return res.status(200).json(authors);
  } catch (error) {
    // Manage the errors finding the authors
    return res.status(400).json({ message: `Error getting authors: ${error}` });
  }
};

// Function to get one author
const getAuthor = async (req, res, next) => {
  try {
    // Find the author
    const { id } = req.params;
    const author = await Author.findById(id).populate('books');

    // Verify if author doesn't exist
    if (!author) {
      return res.status(404).json('Author not found');
    }

    // Ok response finding the author
    return res.status(200).json(author);
  } catch (error) {
    // Manage the errors finding the author
    return res
      .status(400)
      .json({ message: `Error getting the author: ${error}` });
  }
};

// Function to create an author
const createAuthor = async (req, res, next) => {
  try {
    // Verify if author already exist
    const { name } = req.body;

    const existingAuthor = await Author.findOne({ name });

    if (existingAuthor) {
      return res
        .status(400)
        .json({ message: `The author ${name}, already exists.` });
    }

    // Create a new Author
    const newAuthor = new Author(req.body);

    // Handle image upload
    if (req.file) {
      newAuthor.photo = req.file.path;
    }

    // Save the new author to the DB
    const authorSaved = await newAuthor.save();

    // Ok response when creating the new author
    return res.status(201).json(authorSaved);
  } catch (error) {
    // Manage the errors creating the author
    return res
      .status(500)
      .json({ message: `Error creating the author: ${error}` });
  }
};

// Function to update an author
const updateAuthor = async (req, res, next) => {
  try {
    // Collect the parameters to update the author
    const { id } = req.params;
    const { name, biography, books, booksToRemove } = req.body;

    // Update simple fileds
    const updateSimpleFiels = {
      $set: {
        name,
        biography,
      },
    };

    // Add new elements to books array
    if (books !== undefined) {
      updateSimpleFiels.$addToSet = { books: { $each: books } };
    }

    await Author.findByIdAndUpdate(id, updateSimpleFiels, {
      new: true,
      runValidators: true,
    });

    // Remove elements from books array
    const updateBooksToRemove = {
      $pullAll: { books: booksToRemove },
    };
    // if (booksToRemove) {
    // }

    await Author.findByIdAndUpdate(id, updateBooksToRemove, {
      new: true,
      runValidators: true,
    });

    // Handle image upload
    if (req.file) {
      const authorUpdated = await Author.findById(id);
      authorUpdated.cover = req.file.path;
      await authorUpdated.save();
    }

    const authorUpdated = await Author.findById(id);
    // Checking if author doesn't exist
    if (!authorUpdated) {
      return res.status(404).json({ message: 'Author not found' });
    }

    // Ok response when updating the author
    return res.status(201).json(authorUpdated);
  } catch (error) {
    // Manage the errors updating the author
    return res
      .status(500)
      .json({ message: `Error updating the author: ${error}` });
  }
};

// Function to delete author
const deleteAuthor = async (req, res, next) => {
  try {
    // Collect the id to delete the author
    const { id } = req.params;

    // Delete the author
    const authorDeleted = await Author.findByIdAndDelete(id);

    // Delete author's photo from Cloudinary
    deleteFile(authorDeleted.photo);

    // Manage if book doesn't exist
    if (!authorDeleted) {
      return res.status(404).json('Author not found');
    }

    // Ok response when deleting the author
    return res.status(200).json({
      message: 'Author has been deleted',
      element: authorDeleted,
    });
  } catch (error) {
    // Manage the errors deleting the author
    return res.status(400).json(`Error deleting the author: ${error}`);
  }
};

// Exports
module.exports = {
  getAuthors,
  getAuthor,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
