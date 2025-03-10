const Project = require("../models/project.model")


const getProject = async(req,res,next)=>{
    try{
        const project = await Project.find({userId: req.params.id})
        console.log("Project is : ",project)
        return res.status(200).json(project) 
    }
    catch(error){
        next(error)
    }
}
const createProject = async(req,res,next) => {
    try{
        const project = await Project.create(req.body) 
        return res.status(201).json(project) 
    }
    catch(error){
        next(error)
    }
}
const deleteProject = async(req,res,next)=>{
    try{
        await Project.findByIdAndDelete(req.params.id) ; 
        return res.status(200).json({success: true, msg: "User has been deleted successfully !"}) ; 
    }catch(error){
        next(error)
    }
}
const updateProject = async(req,res,next)=>{
    try{
        const project = await Project.findByIdAndUpdate(req.params.id, req.body, {new: true}) ; 
        return res.status(200).json(project)
    }
    catch(error){
        next(error)
    }
}
module.exports = {getProject, createProject, deleteProject, updateProject}