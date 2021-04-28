const route = require("express").Router();
const Books = require("../models/Books");
const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images')
  },
  
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})
 
var upload = multer({ storage: storage })

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

route.post("/",upload.single('picture'), (req, res) => {

  console.log(req.body);
  if (req.user) {
    Books.insertMany({
      UserID: req.user._id,
      // BookName: req.body.BookName,
      BookName:req.body.BookName,
      Description: {
        Amount: req.body.Amount,
        Publisher: req.body.Publisher,
        PublishDate: req.body.Published,
        About: req.body.About,
      },
      Picture: req.file.filename,  
    }).then((data) => res.send(data))
    .catch(err => console.log(err));
  } else {
    res.redirect("/login/google");
  }
});

exports = module.exports = { route };
