const route = require('express').Router()
const book = require('../models/Book').product

const authCheck = (req,res,next) => {
    if(req.user){
        next()
    }else{
        res.redirect('/login.html')
    }
}

route.post('/', (req, res) => {

    if (isNaN(req.body.price)) {
        return res.status(403).send({
            error: "Price is not valid number"
        })
    }
    if (req.body.bookID == null) {
        return res.status(403).send({
            error: "Book id cannnot be NULL"
        })
    }
    if (req.body.bookName == null) {
        return res.status(403).send({
            error: "Book name cannot be empty"
        })
    }
    if (req.body.bookauthor == null) {
        return res.status(403).send({
            error: "kisi ne to likhi hogi"
        })
    }
    book.create({

        Book_id: parseInt(req.body.Book_id),
        Renter_id: parseInt(req.body.Renter_id),
        Tenant_id: parseInt(req.body.Tenant_id),
        Book_name: req.body.Book_name,
        Price: parseInt(req.body.Price),
        Author: req.body.Author,
        Year_of_manufacture: req.body.Year_of_manufacture,

        })
        .then((book) => {
            res.status(201).send(book)
            console.log("This book has been added")
        })
        .catch((error) => {
            console.log(err)
            res.status(501).send({
                error: "Error adding book"
            })
        })
})


exports = module.exports = { route }
