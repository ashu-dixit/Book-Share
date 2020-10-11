const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Book = new Schema({
  UserID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  BookName: {
    type: String,
    required: true,
  },
  Price: Number,
  Description: {
    type: Object,
    Author: {
      type: String,
      required: true,
    },
    Publisher: {
      type: String,
      required: true,
    },
    PublishDate: {
      type: Date,
    },
    About: {
      type: String,
    },
  },
});

const Books = mongoose.model("Books", Book);

exports = module.exports = Books;
