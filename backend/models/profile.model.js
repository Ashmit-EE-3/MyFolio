const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true 
    },
    description: {
        type: String,
    },
    location: {
        type: String, 
    },
    languages: [{
        language: {
            type: String,
            required: true
        },
        proficiency: {
            type: String
        }  
    }],
    techStack: [{
        type: String
    }],
    resume: {
        type: String,
    }
},{timestamps: true})

const Profile = mongoose.model('Profile',profileSchema)

module.exports = Profile