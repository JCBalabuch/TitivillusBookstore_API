require('dotenv').config();
const express = require('express');
const { connectDDBB } = require('./src/config/ddbb');

// Routes
const booksRouter = require('./src/api/routes/books.routes');
const authorsRouter = require('./src/api/routes/authors.routes');
const editorialsRouter = require('./src/api/routes/editorial.routes');

const PORT = 3000;

const app = express();
connectDDBB();

app.use(express.json());

app.use('/api/v1/books', booksRouter);
app.use('/api/v1/authors', authorsRouter);
app.use('/api/v1/editorials', editorialsRouter);

app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found');
});

app.listen(PORT, () => {
  console.log(`Server run in http://localhost:${PORT}`);
});
