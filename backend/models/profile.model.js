const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    about: {
        type: String,
    },
    location: {
        type: String,
    },
    college:{
        type: String,
    },
    languages: [{
        language: {
            type: String
        },
        proficiency: {
            type: String,
            enum: ["Basic","Intermediate","Proficient"],
        }
    }],
    techStack: [{
        type: String
    }],
    resume: {
        type: String,
    },
    certificate: {
        certificateName: {
            type: String,
        },
        certificateLink: {
            type: String,
        },
        certificatePDF: {
            type: String,
        }
    }
}, { timestamps: true })

const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile