const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    projectLink: {
        type: String,
    },
    repoLink: {
        type: String
    },
    status: {
        type: String,
        enum: ['Planning...','In Progress...','Completed','Deployed']
    },
    images: [{
        type: String,
    }],
    techstack: [{
        type: String,
    }]
},{timestamps: true})

const Project = mongoose.model('Project',projectSchema)

module.exports = Project