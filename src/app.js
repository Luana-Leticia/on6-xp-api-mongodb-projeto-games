const express = require('express')
const app = express()
const router = require('./routes/gamesRoute')
const cors = require('cors')

const database = require('./models/repository')
database.connect()

app.use(express.json())
app.use(cors())
app.use('/', router)

module.exports = app