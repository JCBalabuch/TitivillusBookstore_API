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
  }
);

// bookSchema.pre('save', async (next) => {
//   const existingBook = await Book.findOne({ idBook: this.idBook });
//   if (existingBook) {
//     console.log(existingBook);

//     next(new Error('Duplicate book ID generated. Please try again'));
//   } else {
//     next();
//   }
// });

// bookSchema.pre('save', async (next) => {
//   if (!this.idBook) {
//     this.idBook = uuidv4();

//     const existingBook = await Book.findOne({ idBook: this.idBook });
//     if (existingBook) {
//       throw new Error('Duplicate book ID generated. Please try again');
//     }
//   }
//   next();
// });

const Book = mongoose.model('books', bookSchema, 'books');

module.exports = Book;
