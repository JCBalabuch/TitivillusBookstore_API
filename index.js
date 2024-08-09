require('dotenv').config();
const express = require('express');
const { connectDDBB } = require('./src/config/ddbb');

// Imports
const booksRouter = require('./src/api/routes/books.routes');
const authorsRouter = require('./src/api/routes/authors.routes');
const editorialsRouter = require('./src/api/routes/editorial.routes');
const { connectCloudinary } = require('./src/config/cloudinary');

// Port
const PORT = 3000;

const app = express();

// Conections
connectDDBB();
connectCloudinary();

// Ability to read json
app.use(express.json());

// Routes
app.use('/titivillus/books', booksRouter);
app.use('/titivillus/authors', authorsRouter);
app.use('/titivillus/editorials', editorialsRouter);

app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found');
});

// Listen
app.listen(PORT, () => {
  console.log(`Server run in http://localhost:${PORT}`);
});
