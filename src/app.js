const jwt = require('jsonwebtoken')
const express = require('express')
const bodyParser = require('body-parser')
const app = express();

const verifyJWT = require('./middleware/verifyJWT')


const index = require('./routes/index')
const usersRoute = require('./routes/usersRoute')
const authRoute = require('./routes/authRoute')




app.use(bodyParser.urlencoded({extended: true}))
app.use('/', index)
app.use('/users',  usersRoute)
app.use('/auth', authRoute)



module.exports = app;