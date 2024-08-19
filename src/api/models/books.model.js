const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    cover: {
      type: String,
      required: true,
      default: 'https://www.ucm.es/icae/file/no-image-available/?ver',
    },
    description: { type: String, required: true },
    editorial: { type: String, required: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
    collection: 'books',
  }
);

const Book = mongoose.model('books', bookSchema, 'books');

module.exports = Book;
