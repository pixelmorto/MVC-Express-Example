const express = require('express')
const bodyParser = require('body-parser')
const app = express();

const index = require('./routes/index')
const users = require('./routes/usersRoute')

app.use(bodyParser.urlencoded({extended: true}))
app.use('/', index)
app.use('/users', users)


module.exports = app;