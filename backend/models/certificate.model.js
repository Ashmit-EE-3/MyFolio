const mongoose = require('mongoose')

const certificateSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    certificateName: {
        type: String,
        required: true,
    },
    certificateLink: {
        type: String,
    },
    certificateImage: [{
        type: String,
    }]
},{timestamps: true})

const Certificate = mongoose.model('Certificate',certificateSchema)

module.exports = Certificate