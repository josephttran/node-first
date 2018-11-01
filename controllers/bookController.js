const { Book } = require('../models/book');
const ObjectId = require('mongoose').Types.ObjectId;

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

exports.bookReadOne = (req, res) => {
  if (!ObjectId.isValid(req.params.id)){
    return res.status(400).send(`No record with given id: ${req.params.id}`);
  }

  Book.findById(req.params.id, (err, book) => {
    if (!err) {
      res.send(book);
    } else {
      console.log(`Error retriving book: ${err}`);
    }
  })
};

exports.bookUpdate = (req, res) => {
  if (!ObjectId.isValid(req.params.id)){
    return res.status(400).send(`No record with given id: ${req.params.id}`);
  }

  Book.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, (err, book) => {
    if (!err) {
      res.send(`Update Success: ${book}`);
    } else {
      console.log(`Error retriving book: ${err}`);
    }
  })
};

exports.bookDelete = (req, res) => {
  if (!ObjectId.isValid(req.params.id)){
    return res.status(400).send(`No record with given id: ${req.params.id}`);
  }

  Book.findByIdAndRemove(req.params.id, (err, book) => {
    if (!err) {
      res.send(`Delete Success: ${book}`);
    } else {
      console.log(`Error retriving book: ${err}`);
    }
  })
};