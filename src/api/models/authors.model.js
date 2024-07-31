const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    photo: { type: String },
    biography: { type: String, required: true },
    books: [{ type: mongoose.Types.ObjectId, ref: 'books' }],
  },
  {
    timestamps: true,
  }
);

const Author = mongoose.model('authors', authorSchema, 'authors');

module.exports = Author;
