const Project = require("../models/project.model")

const createProject = async(req,res,next) => {
    try{
        const project = await Project.create(req.body) 
        return res.status(201).json(project) 
    }
    catch(error){
        next(error)
    }
}

module.exports = {createProject}