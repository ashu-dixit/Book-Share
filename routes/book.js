const route = require("express").Router();
const Books = require("../models/Books");
route.get("/", (req, res) => {

  if (!req.user) {
    res.redirect("/login/google");
  } else {
    Books.find({
        UserID:req.user._id
    })
      .limit(10)
      .then((response) => {
        res.send(response);
      });
  }
});

route.get("/home", (req, res) => {
  Books.find()
    .limit(10)
    .then((response) => {
      res.send(response);
    });
});

route.post("/", (req, res) => {

  console.log(req.files.picture);
  if (req.user) {
    Books.insertMany({
      UserID: req.user._id,
      BookName: req.body.BookName,
      Description: {
        Amount: req.body.Amount,
        Publisher: req.body.Publisher,
        PublishDate: req.body.Published,
        About: req.body.About,
      },
      Picture: req.files.picture,
    }).then((data) => res.send(data))
    .catch(err => console.log(err));
  } else {
    res.redirect("/login/google");
  }
});

exports = module.exports = { route };
