// Imports
require('dotenv').config();
const express = require('express');
const { connectDDBB } = require('./src/config/ddbb');
const booksRouter = require('./src/api/routes/books.routes');
const authorsRouter = require('./src/api/routes/authors.routes');
const editorialsRouter = require('./src/api/routes/editorial.routes');
const { connectCloudinary } = require('./src/config/cloudinary');

// Port
const PORT = 3000;

// Express application instance
const app = express();

// Conections
connectDDBB();
connectCloudinary();

// Enable to read json
app.use(express.json());

// Routes
app.use('/titivillus/books', booksRouter);
app.use('/titivillus/authors', authorsRouter);
app.use('/titivillus/editorials', editorialsRouter);

// Handle routes not found
app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server run in http://localhost:${PORT}`);
});
