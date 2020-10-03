const mongoose = require('mongoose')

//Schema
const Schema = mongoose.Schema
const user = new Schema({
        name: String,
        email: String,
        googleid: String,
        Date: {
            type: String,
            default: Date.now
        },
        photo: String,
        address: {
            mobileNumber: Number,
            country: String,
            state: String,
            pincode: Number,
            addressline1: String,
            addressline2: String
        }

    })
    //model
const users = mongoose.model('users', user)

exports = module.exports = users