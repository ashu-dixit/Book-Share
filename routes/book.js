const route = require("express").Router();
const { response } = require("express");
const Books = require('../models/Books');
route.get("/", (req, res) => {
    Books.find({
        UserID : req.user._id
    }).then(response => {
        res.send(response)
    })
});

route.get("/home", (req, res) => {
    Books.find({
        limit:10
    }).then(response => {
        res.send(response);
    })
})

exports = module.exports = { route }
