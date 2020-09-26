const mongoose = require('mongoose')

const Schema = mongoose.Schema
const Book = new Schema(
{
  Book_id: string,
  Renter_id: string,
  Tenant_id: string,
  Book_name: string,
  Price: Number,
  Author: string,
  Year_of_manufacture:string
})

const Book = mongoose.model('Book', user)

exports = module.exports = Book