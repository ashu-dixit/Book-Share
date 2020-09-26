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

const Tenants = mongoose.model('Tenants', user)

exports = module.exports = Tenants