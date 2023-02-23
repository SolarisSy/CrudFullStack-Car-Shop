import mongoose from 'mongoose'

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

const User = mongoose.model('User', Schema)
export default User
