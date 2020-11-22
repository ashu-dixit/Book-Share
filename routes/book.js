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
      Picture: new Buffer.from(req.files.picture.data, 'base64'),
    }).then((data) => res.send(data))
    .catch(err => console.log(err));
  } else {
    res.redirect("/login/google");
  }
});

exports = module.exports = { route };
