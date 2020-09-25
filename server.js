const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', require('./routes').route)

app.listen(PORT, () => console.log('Server has started'))