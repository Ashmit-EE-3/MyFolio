const mongoose = require('mongoose')

const socialSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    github: {
        type: String,
    },
    linkedin: {
        type: String,
    },
    instagram: {
        type: String,
    },
    email: {
        type: String,
    },
    twitter: {
        type: String,
    },
    youtube:{
        type: String,
    }
},{timestamps: true})

const Social = mongoose.model('Social',socialSchema)

module.exports = Social