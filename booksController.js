// files for end points
let books = [];
let id = 0;
const createError = require("http-errors");

exports.getAllBooks = (req, res) => {
  res.send(books);
};

exports.addBook = (req, res) => {
  // store request body in a variable
  // req body conatains todo object
  const book = req.body;
  book.id = id;
  // push the new todo into the todos array
  books.push(book);
  id++;
  // send back updated array to user
  res.send(books);
};

exports.getBookById = (req, res, next) => {
  const id = req.params.id;
  const book = books.find((book) => (book.id = parseInt(id)));
  if (book) {
    res.send(book);
  } else {
    next(createError(404, "Book not found"))
    // res.send("Book not found");
  }
};

exports.deleteBook = (req, res) => {
  const id = req.params.id;
  // so array filters out object that has id that matches one in our params
  books = books.filter((book) => book.id != parseInt(id));
  res.send(books);
};

exports.updateBook = (req, res) => {
  const { title, completed } = req.body;
  const id = req.params.id;

  const book = books.filter((book) => book.id == parseInt(id));
  // if no to do
  if (!book) {
    return res.send("Book not found");
  } else {
    books = books.map((book) => {
      if (book.id == parseInt(id)) {
        return {
            ...book,
          title: title || book.title,
          completed: completed || book.completed,
        };
      }
      return book;
    });
  }

res.send(books);
};
