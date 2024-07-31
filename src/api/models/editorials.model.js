const mongoose = require('mongoose');

const editorialsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    logo: { type: String, required: true },
    description: { type: String, required: true },
    country: { type: String },
    books: [{ type: mongoose.Types.ObjectId, ref: 'books' }],
    authors: [{ type: mongoose.Types.ObjectId, ref: 'authors' }],
  },
  {
    timestamps: true,
  }
);

const Editorial = mongoose.model('editorials', editorialsSchema, 'editorials');

module.exports = Editorial;
