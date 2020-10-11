const route = require('express').Router()

route.use('/book', require('./book').route)

exports = module.exports = {route}