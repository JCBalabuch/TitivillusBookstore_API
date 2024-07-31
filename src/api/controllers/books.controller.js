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
    return res.status(200).json(book);
  } catch (error) {
    return res.status(400).json(`Error getting books: ${error}`);
  }
};

const createBook = async (req, res, next) => {
  try {
    const { title, editorial } = req.body;

    const existingBook = await Book.findOne({ title, editorial });

    if (existingBook) {
      return res
        .status(400)
        .json(
          `Book with title ${title} and editorial ${editorial}, already exist`
        );
    }

    const newBook = new Book(req.body);
    const bookSaved = await newBook.save();

    return res.status(201).json(bookSaved);
  } catch (error) {
    return res.status(400).json(`Error creating books: ${error}`);
  }
};

const updateBook = async (req, res, next) => {
  try {
    const { id } = req.params;

    const newBook = new Book(req.body);
    newBook._id = id;

    const bookUpdated = await Book.findByIdAndUpdate(id, newBook, {
      new: true,
    });
    return res.status(201).json(bookUpdated);
  } catch (error) {
    return res.status(400).json(`Error updating books: ${error}`);
  }
};

const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bookDeleted = await Book.findByIdAndDelete(id);
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
  createBook,
  updateBook,
  deleteBook,
};
