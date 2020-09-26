const mongoose = require('mongoose')

const Schema = mongoose.Schema
const Tenant = new Schema(
{
  Tenant_id: string,
  Tenant_name: string,
  Contact_no.:{
   type: Number,
   required: true,
   },
  College_name: string,
  Address: string,
  Amount_deposited: {
   type: Number
   }
})

const Tenant = mongoose.model('Tenant', user)

exports = module.exports = Tenant