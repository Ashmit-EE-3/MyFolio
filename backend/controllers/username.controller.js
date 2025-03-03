const { devToolsEnhancerLogOnlyInProduction } = require("@redux-devtools/extension");
const Username = require("../models/username.model");


const getUsername = async(req,res,next)=>{
    try{
        const username = await Username.findOne({userId: req.params.id})
        res.status(200).json(username)
    }
    catch(error){
        next(error)
    }
}

const createUsername = async(req,res,next)=>{
    try{
        const username = await Username.findOne({username: req.body.username})
        
        if (username) return res.status(400).json({ success: false, message: "Username already exists!" });

        const newUsername = await Username.create(req.body) ; 
        return res.status(201).json(newUsername) ; 
    }
    catch(error){
        next(error)
    }

}

const updateUsername = async(req,res,next) => {
    try{
        const username = await Username.findById(req.params.id) ; 

        if (!username) return res.status(404).json({ success: false, message: "Username not created!" });

        const user = await Username.findOne({username: req.body.username}) ; 

        if (user) return res.status(400).json({success: false, message: "Username already exists!"}) ; 

        const updatedUsername = await Username.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})
        res.status(200).json(updatedUsername)
    }
    catch(error){
        next(error)
    }
}

const getUser = async(req,res,next)=>{
    try{
        const user = await Username.findOne({username: req.params.username})
        res.status(200).json(user)
    }
    catch(error){
        next(error)
    }
}

module.exports = {getUsername, updateUsername, createUsername, getUser}