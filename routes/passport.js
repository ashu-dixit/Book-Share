 const passport = require('passport')
 const route = require('express').Router()
 route.get('/', (req, res) => {
     res.redirect('/login/google')
 })
 route.get('/logout', (req, res) => {
     req.logout()
     res.send(req.user)
 })

 route.get('/google', passport.authenticate('google', {
     scope: ['profile', 'email']
 }))

 route.get('/google/redirect', passport.authenticate('google'), (req, res) => {
     // res.send('you reached a callback url')
     res.redirect('http://127.0.0.1:3000')
         // res.send(req.user)
 }) 
 route.get('/user', (req, res) => {
     console.log(req.user + " /login/user")
     res.send(req.user)
 })

 exports = module.exports = {
     route
 } 