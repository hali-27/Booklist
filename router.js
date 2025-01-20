// this file is for routes, end points
const express = require("express")
const router = express.Router(); 
const books = require("./booksController")

router.get("/books", books.getAllBooks);
router.post("/books/add", books.addBook);
router.get("/books/:id", books.getBookById);
router.delete("/books/:id", books.deleteBook);
router.put("/books/:id", books.updateBook);
    


module.exports = router;