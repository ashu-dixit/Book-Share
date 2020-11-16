const route = require("express").Router();
const Books = require('../models/Books');
route.get("/", (req, res) => {
    if(!req.user){
        res.redirect('/login/google')   
    }else{
        Books.find().limit(10).then(response => {
            res.send(response)
        })
    }
});

route.get("/home", (req, res) => {
    Books.find().limit(10).then(response => {
        res.send(response);
    })
})

route.post("/", (req, res) => {
    const {picture} = req.files
    console.log(picture);
    picture.mv("./", + picture.name)
    res.send({status:  true})
})

exports = module.exports = { route }
 