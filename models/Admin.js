const mongoose = require('mongoose')


const Schema = mongoose.Schema
const Admin = new Schema(
{
  Admin_id: string,
  Admin_name: string
})

const Admins = mongoose.model('Admins', Admin)

exports = module.exports = Admins