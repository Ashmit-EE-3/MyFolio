const mongoose = require('mongoose')

const userNameSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    theme: {
        type: String,
        default: "theme-0"
    },
    font: {
        type: String,
        default: "font-0"
    }
},{timestamps: true})

const Username = mongoose.model('Username',userNameSchema)

module.exports = Username