const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    price: {
        type: Number
    },
    marca: {
        type: String,
        required: true,
    },
    ano: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('User', Schema)
