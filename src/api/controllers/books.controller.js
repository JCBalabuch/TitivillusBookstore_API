// Imports
const { deleteFile } = require('../../utils/deleteFiles');
const Book = require('../models/books.model');

// Function to get all books
const getBooks = async (req, res, next) => {
  try {
    // Find all books
    const books = await Book.find();

    // Ok response finding the books
    return res.status(200).json(books);
  } catch (error) {
    // Manage the errors finding the books
    return res.status(400).json({ message: `Error getting books: ${error}` });
  }
};

// Function to get one book
const getBook = async (req, res, next) => {
  try {
    // Find the book
    const { id } = req.params;
    const book = await Book.findById(id);

    // Verify if book doesn't exist
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    // Ok response finding the book
    return res.status(200).json(book);
  } catch (error) {
    // Manage the errors finding the books
    return res
      .status(400)
      .json({ message: `Error getting the book: ${error}` });
  }
};

// Function to get books by price
const getBooksByPrice = async (req, res, next) => {
  try {
    // Find the books by price
    const { minPrice, maxPrice } = req.query;

    let query = {};

    if (minPrice && maxPrice) {
      query.price = { $gte: parseInt(minPrice), $lte: parseInt(maxPrice) };
    }

    const books = await Book.find(query);

    // Ok response finding the book
    return res.status(200).json(books);
  } catch (error) {
    // Manage the errors finding the books
    return res
      .status(400)
      .json({ message: `Error getting books by price: ${error}` });
  }
};

// Function to create a book
const createBook = async (req, res, next) => {
  try {
    // Verify if book already exist
    const { title, editorial } = req.body;

    const existingBook = await Book.findOne({ title, editorial });

    if (existingBook) {
      return res.status(400).json({
        message: `Book with title ${title} and editorial ${editorial}, already exist`,
      });
    }

    // Create a new book
    const newBook = new Book(req.body);

    // Handle image upload
    if (req.file) {
      newBook.cover = req.file.path;
    }

    // Save the new book to the DB
    const bookSaved = await newBook.save();

    // Ok response when creating the new book
    return res.status(201).json(bookSaved);
  } catch (error) {
    // Manage the errors creating the book
    return res.status(500).json({ message: `Error creating books: ${error}` });
  }
};

// Function to update a book
const updateBook = async (req, res, next) => {
  try {
    // Collect the parameters to update the book
    const { id } = req.params;

    const bookUpdated = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    // Handle image upload
    if (req.file) {
      bookUpdated.cover = req.file.path;
    }

    // Verify if book doesn't exist
    if (!bookUpdated) {
      return res.status(404).json({ message: 'Book not found' });
    }

    // Ok response when updating the book
    return res.status(201).json(bookUpdated);
  } catch (error) {
    // Manage the errors updating the book
    return res.status(500).json({ message: `Error updating books: ${error}` });
  }
};

// Function to delete a book
const deleteBook = async (req, res, next) => {
  try {
    // Collect the id to delete the book
    const { id } = req.params;

    // Delete the book
    const bookDeleted = await Book.findByIdAndDelete(id);

    // Delete book's image from Cloudinary
    deleteFile(bookDeleted.cover);

    // Manage if book doesn't exist
    if (!bookDeleted) {
      return res.status(404).json('Book not found');
    }

    // Ok response when deleting the book
    return res.status(200).json({
      message: 'Book has been deleted',
      element: bookDeleted,
    });
  } catch (error) {
    // Manage the errors deleting the book
    return res.status(400).json(`Error deleting the book: ${error}`);
  }
};

// Exports
module.exports = {
  getBook,
  getBooks,
  getBooksByPrice,
  createBook,
  updateBook,
  deleteBook,
};
