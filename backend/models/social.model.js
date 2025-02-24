const mongoose = require('mongoose')

const socialSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true 
    },
    Github: {
        type: String,
    },
    LinkedIn: {
        type: String,
    },
    Instagram: {
        type: String,
    },
    Email: {
        type: String,
    },
    Twitter: {
        type: String,
    },
    Youtube:{
        type: String,
    }
},{timestamps: true})

const Social = mongoose.model('Social',socialSchema)

module.exports = Social