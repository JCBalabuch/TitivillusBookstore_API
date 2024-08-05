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
  }
);

// authorSchema.pre('save', async (next) => {
//   if (!this.id) {
//     this.id = uuidv4();

//     const existingAuthor = await Author.findOne({ id: this.id });
//     if (existingAuthor) {
//       throw new Error('Duplicate author ID generated. Please try again');
//     }
//   }
//   next();
// });

const Author = mongoose.model('authors', authorSchema, 'authors');

module.exports = Author;
