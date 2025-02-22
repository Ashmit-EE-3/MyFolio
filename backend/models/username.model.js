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
},{timestamps: true})

const Username = mongoose.model('Username',userNameSchema)

module.exports = Username