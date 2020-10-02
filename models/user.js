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
        cart: [{
            _id: mongoose.Schema.Types.ObjectId,
            quantity: Number,
            productName: {
                type: String,
                required: true
            },
            discription: {
                about: String,
                size: String,
                colour: String,
                price: String,
                discount: {
                    type: String,
                    default: 0
                }
            },
            supplierid: String,
            categoryid: String,
            stock: {
                type: Number,
                required: true
            },
            picture: {
                type: String,
                require: true
            }
        }],
        orderList: [{
            _id: mongoose.Schema.Types.ObjectId,
            quantity: Number,
            productName: {
                type: String,
                required: true
            },
            discription: {
                about: String,
                size: String,
                colour: String,
                price: String,
                discount: {
                    type: String,
                    default: 0
                }
            },
            supplierid: String,
            categoryid: String,
            stock: {
                type: Number,
                required: true
            },
            picture: {
                type: String,
                require: true
            }
        }],
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