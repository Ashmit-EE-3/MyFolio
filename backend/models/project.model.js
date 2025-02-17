const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    projectName: {
        type: String,
        required: true,
    },
    projectDescription: {
        type: String,
    },
    projectLink: {
        type: String,
    },
    githubLink: {
        type: String
    },
    projectStatus: {
        type: String,
        enum: ['Planning...','In Progress...','Completed','Deployed']
    },
    projectImages: [{
        type: String,
    }],
    projectTechStack: [{
        type: String,
    }]
},{timestamps: true})

const Project = mongoose.model('Project',projectSchema)

module.exports = Project