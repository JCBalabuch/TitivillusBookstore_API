const { deleteFile } = require('../../utils/deleteFiles');
const Book = require('../models/books.model');

const getBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    return res.status(200).json(books);
  } catch (error) {
    return res.status(400).json(`Error getting books: ${error}`);
  }
};

const getBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json('Book not found');
    }

    return res.status(200).json(book);
  } catch (error) {
    return res.status(400).json(`Error getting books: ${error}`);
  }
};

const getBooksByPrice = async (req, res, next) => {
  try {
    const { minPrice, maxPrice } = req.query;

    let query = {};

    if (minPrice && maxPrice) {
      query.price = { $gte: parseInt(minPrice), $lte: parseInt(maxPrice) };
    }

    const books = await Book.find(query);
    return res.status(200).json(books);
  } catch (error) {
    return res.status(400).json(`Error getting books by price: ${error}`);
  }
};

const createBook = async (req, res, next) => {
  try {
    const { title, editorial } = req.body;

    // Verify if book already exist
    const existingBook = await Book.findOne({ title, editorial });

    if (existingBook) {
      return res
        .status(400)
        .json(
          `Book with title ${title} and editorial ${editorial}, already exist`
        );
    }

    // Create a new book
    const newBook = new Book(req.body);

    // console.log('controller l 61', req.file);
    console.log('controller l 62', newBook);

    // Handle image upload
    if (req.file) {
      newBook.cover = req.file.path;
      console.log(req.file);
    }

    // Save the new book in the DB
    const bookSaved = await newBook.save();

    return res.status(201).json(bookSaved);
  } catch (error) {
    return res.status(400).json(`Error creating books: ${error}`);
  }
};

const updateBook = async (req, res, next) => {
  try {
    const { id } = req.params;

    const bookUpdated = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!bookUpdated) {
      return res.status(404).json('Book not found');
    }

    return res.status(201).json(bookUpdated);
  } catch (error) {
    return res.status(400).json(`Error updating books: ${error}`);
  }
};

const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;

    const bookDeleted = await Book.findByIdAndDelete(id);

    deleteFile(bookDeleted.cover);

    if (!bookDeleted) {
      return res.status(404).json('Book not found');
    }

    return res.status(200).json({
      message: 'Book has been deleted',
      element: bookDeleted,
    });
  } catch (error) {
    return res.status(400).json(`Error deleting the book: ${error}`);
  }
};

module.exports = {
  getBook,
  getBooks,
  getBooksByPrice,
  createBook,
  updateBook,
  deleteBook,
};
