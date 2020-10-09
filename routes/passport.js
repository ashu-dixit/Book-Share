 const passport = require('passport')
 const route = require('express').Router()
//  const {OAuth2Client} = require('google-auth-library')
//  const keys = require('../config/keys')
//  const client = new OAuth2Client(keys.google.ClientID)
 route.get('/', (req, res) => {
     res.redirect('/login/google')
 })
 route.get('/logout', (req, res) => {
     req.logout()
     res.send(req.user)
 })
//  route.post('/google', (req, res) => {
//      const {tokenID} = req.body
//      client.verifyIdToken({idToken: tokenID, audience:keys.google.ClientID})
//      .then(res => {
//          const {email_verified, name, email} = res.getPayload();
//          console.log(res);
//      })
//  })
 route.get('/google', passport.authenticate('google', {
     scope: ['profile', 'email']
 }))

 route.get('/google/redirect', passport.authenticate('google'), (req, res) => {
     // res.send('you reached a callback url')
     res.redirect('http://127.0.0.1:3000')
         // res.send(req.user)
 })
 route.get('/user', (req, res) => {
     res.send(req.user)
 })

 exports = module.exports = {
     route
 }