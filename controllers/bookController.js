const { Book } = require('../models/book');

exports.bookCreate = (req, res) => {
  const book = new Book ({
    title: req.body.title,
    author: req.body.author,
    isbn: req.body.isbn,
    year: req.body.year
  });

  book.save((err, book) => {
    if (!err) {
      res.send(book);
    } else {
      console.log(`Error in creating: ${err}`);
    }
  });
}

exports.bookRead = (req, res) => {
  Book.find((err, book) => {
    if (!err) {
      res.send(book);
    } else {
      console.log(`Error in Books: ${err}`);     
    }
  })
}