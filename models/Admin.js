const mongoose = require('mongoose')

const Schema = mongoose.Schema
const Admin = new Schema(
{
  Admin_id: {
    type: String,
    required: true
    },
  Admin_name: {
    type: String,
    required: true
    }
})

const Admins = mongoose.model('Admins', Admin)

exports = module.exports = Admins
