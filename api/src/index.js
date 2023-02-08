const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const router = require('./Routes/Router')

const app = express()

const dbUri = 'mongodb+srv://igor:06082011@cluster0.xsmuh1l.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(dbUri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, () => console.log('Connected to database'))

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(process.env.PORT || 8800,  ()=> console.log('Server running on port http://localhost:8800'))
