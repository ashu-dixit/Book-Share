const express = require('express')
const app = express()
const port = process.env.PORT || 3333

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', require('./routes').route)

app.listen(port, () => console.log('Server has started'))