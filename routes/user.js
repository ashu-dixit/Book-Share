const route = require('express').Router()

route.get('/', (req, res) => {
    res.send("hello");
})


exports = module.exports = { route }