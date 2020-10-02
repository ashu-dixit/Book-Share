const mongoose = require('mongoose')


const Schema = mongoose.Schema
const Book = new Schema(
{
  Book_id:{
    type: String,
    required: true
    },
  Renter_id:{
    type: String,
    required: true
    },
  Tenant_id: {
    type: String,
    required: true
    },
  Book_name: {
    type: String,
    required: true
    },
  Price: Number,
  Author: {
    type: String,
    required: true
    },
  Year_of_manufacture:{
    type: String,
    required: true
    }
})

const Books = mongoose.model('Books', user)

exports = module.exports = Books
