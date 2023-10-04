require('dotenv').config()

const express = require('express')
const connectToDB = require('./config/db.js')
const cors = require('cors') // import the cors middleware

const app = express()

// express middleware
// Middleware functions can perform tasks such as authentication, data parsing, request processing, and more.
app.use(express.json())
// middleware to parse URL-encoded form data
app.use(express.urlencoded({urlencoded: true}))
// enable CORS for all routes
app.use(cors())

// init connection to DB
connectToDB()

const userRoutes = require('./routes/user.route.js')

app.use('/', userRoutes)


module.exports = app