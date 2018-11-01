const mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
  title: { type: String },
  author: { type: String },
  isbn: { type: Number, min:10000000000, max: 9999999999999},
  year: { type: Number, min: 1000, max: 2020},
})

var Book = mongoose.model('Book', bookSchema);

module.exports = { Book };