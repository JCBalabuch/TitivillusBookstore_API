const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

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
  }
);

bookSchema.pre('save', async (next) => {
  if (!this.id) {
    this.id = uuidv4();

    const existingBook = await Book.findOne({ id: this.id });
    if (existingBook) {
      throw new Error('Duplicate book ID generated. Please try again');
    }
  }
  next();
});

const Book = mongoose.model('books', bookSchema, 'books');

module.exports = Book;
