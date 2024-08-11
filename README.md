# TITIVILLUS BOOKSTORE API

REST API created for the Titivillus bookstore, to manage the database of the books that this bookstore sells and their cataloging by authors and publishers.

## Tech Stack

**Server:** Node.js, Express.js, MongoDB, Cloudinary.

## Dependencies

Cloudinary, CSV-Parser, Dotenv, Express, Mongoose, Multer, Multer-Storage-Cloudinary

## Files Structure

## Instalation

### Clone project

```bash
https://github.com/JCBalabuch/TitivillusBookstore_API.git
```

### Install

```bash
npm install
```

### Execution

```bash
npm run start
```

or

```bash
npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DDBB_URL`: Your Mongo url

And from Cloudinary:

`CLOUD_NAME`

`API_KEY`

`API_SECRET`

## Usage

### Creating seeds

Start with the CSV files of the collections: books, authors and publishers, located in the seeds folder.

Run

```bash
npm run handleCSV
```

Once the data for the seeds has been generated, the following commands must be executed consecutively

```bash
npm run bookseed
```

```bash
npm run authorseed
```

```bash
npm run editorialseed
```

## Endpoints

This section describes the API endpoints available for managing collections in the project.

| COLLECTION     | Method | Endpoints                  | Query Params                            | Description                                                         |
| -------------- | ------ | -------------------------- | --------------------------------------- | ------------------------------------------------------------------- |
| **BOOKS**      | GET    | /                          |                                         | Retrieves a list of all books in the database. (getBooks)           |
|                |        | /get-book/:id:             |                                         | Retrieves a specific book based on its ID. (getBook)                |
|                |        | /filter-by-price/by-price: | minPrice (integer) & maxPrice (integer) | Retrieves books within a specified price range. (getBooksByPrice)   |
|                | POST   | /create-book:              | Request body                            | Creates a new book (createBook).                                    |
|                | PUT    | /update-book/:id:          | Request body                            | Updates an existing book based on its ID (updateBook).              |
|                | DELETE | /delete-book/:id:          |                                         | Deletes a book based on its ID. (deleteBook)                        |
| **AUTHORS**    | GET    | /                          |                                         | Retrieves a list of all authors in the database. (getAuthors)       |
|                |        | /get-author/:id:           |                                         | Retrieves a specific author based on its ID. (getAuthor)            |
|                | POST   | /create-author:            | Request body                            | Creates a new author (createAuthor).                                |
|                | PUT    | /update-author/:id:        | Request body                            | Updates an existing author based on its ID (updateAuthor).          |
|                | DELETE | /delete-author/:id:        |                                         | Deletes a author based on its ID. (deleteAuthor)                    |
| **EDITORIALS** | GET    | /                          |                                         | Retrieves a list of all Editorials in the database. (getEditorials) |
|                |        | /get-editorial/:id:        |                                         | Retrieves a specific editorial based on its ID. (getEditorial)      |
|                | POST   | /create-editorial:         | Request body                            | Creates a new Editorial (createEditorial).                          |
|                | PUT    | /update-editorial/:id:     | Request body                            | Updates an existing Editorial based on its ID (updateEditorial).    |
|                | DELETE | /delete-editorial/:id:     |                                         | Deletes a Editorial based on its ID. (deleteEditorial)              |

_Error Handling:_

All endpoints use appropriate HTTP status codes to indicate success or failure. Common status codes include:

200 (OK): Successful request.

201 (Created): Resource created successfully (e.g., creating a new book).

400 (Bad Request): Invalid request body or query parameters.

404 (Not Found): Requested resource (e.g., book) not found.

500 (Internal Server Error): Unexpected error during operation.

_Additional Notes:_

The /create-book endpoint utilizes the uploadFiles middleware for handling image uploads to Cloudinary.

The /delete-book endpoint removes the associated image from Cloudinary upon successful deletion.

## Authors

- Jeniffer Balabuch // [Github](https://www.github.com/JCBalabuch) - [Linkedin](https://www.linkedin.com/in/jenifferbalabuch/) - [Portfolio](https://portfoliojcbs.netlify.app/)

## Feedback

If you have any feedback, please reach out with me to the Linkedin or Github.
