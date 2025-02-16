const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    displayName: {
        type: String, 
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    photoURL: {
        type: String, 
        default: "abc",
    },
},{timestamps: true})

const User = mongoose.model('User',userSchema)

module.exports = User 