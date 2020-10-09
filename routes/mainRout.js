const route = require('express').Router()

route.get('/user', require('./user').route)

exports = module.exports = {route}