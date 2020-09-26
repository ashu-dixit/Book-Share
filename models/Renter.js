const mongoose = require('mongoose')

const Schema = mongoose.Schema
const Renter = new Schema(
{
  Renter_id:{
    type: String,
    required: true
    },
  Renter_name:{
    type: String,
    required: true
    },
  Contact_no:{
   type: Number,
   required: true,
   },
  Address:{
    type: String,
    required: true
    },
  Amount_recieved: {
   type: Number
   }
})

const Renters = mongoose.model('Renters', user)

exports = module.exports = Renters
