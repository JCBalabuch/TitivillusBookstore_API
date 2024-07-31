const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    cover: { type: String, required: true },
    description: { type: String, required: true },
    editorial: { type: String, required: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model('books', bookSchema, 'books');

module.exports = Book;

// const newBook = new Book({
//   title: 'El Libro de las Bestias Fantásticas',
//   author: 'Newton Scamander',
//   cover:
//     'https://static.wikia.nocookie.net/esharrypotter/images/8/89/Animales_Fant%C3%A1sticos_y_D%C3%B3nde_Encontrarlos_2009.jpg/revision/latest/scale-to-width/360?cb=20110728035143',
//   description:
//     'Una guía completa sobre las criaturas mágicas que habitan nuestro mundo.',
//   editorial: 'Salamandra',
//   price: 29.99,
// });

// newBook
//   .save()
//   .then((book) => console.log(book))
//   .catch((err) => console.log(err));
