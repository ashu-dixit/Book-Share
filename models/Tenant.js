const mongoose = require('mongoose')


const Schema = mongoose.Schema
const Tenant = new Schema(
{
  Tenant_id: {
    type: String,
    required: true
    },
  Tenant_name: {
    type: String,
    required: true
    },
  Contact_no:{
   type: Number,
   required: true,
   },
  College_name: {
    type: String,
    required: true
    },
  Address: {
    type: String,
    required: true
    },
  Amount_deposited: {
   type: Number
   }
})

const Tenants = mongoose.model('Tenants', user)

exports = module.exports = Tenants
