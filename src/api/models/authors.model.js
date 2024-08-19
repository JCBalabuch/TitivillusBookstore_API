const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    photo: {
      type: String,
      default: 'https://www.ucm.es/icae/file/no-image-available/?ver',
    },
    biography: { type: String, required: true },
    books: [{ type: mongoose.Types.ObjectId, ref: 'books' }],
  },
  {
    timestamps: true,
    collection: 'author',
  }
);

const Author = mongoose.model('authors', authorSchema, 'authors');

module.exports = Author;
