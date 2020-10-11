const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')
const passport = require('passport')
const passportSetup = require('./passport-setup')
const cookieSession = require('cookie-session')
const keys = require('./config/keys')

const app = express()
const PORT = process.env.PORT || 3300

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//authentication active time
app.use(cookieSession({
    maxAge: 6 * 60 * 60 * 1000,
    keys: [keys.session.key]
}))
 
app.use(passport.initialize())
app.use(passport.session())

app.use(morgan('tiny'))

const MONGODB_URI = keys.mongodb.MONGODB_URI
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use('/', express.static(path.join(__dirname, 'basicUI')))
app.use('/login', require('./routes/passport').route)
app.use('/profile', require('./routes/mainRout').route)
app.use('/books', require('./routes/book').route)


app.listen(PORT, () => console.log('Server has started'))