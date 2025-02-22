const Social = require("../models/social.model");
const Project = require("../models/project.model");
const Profile = require("../models/profile.model")
const User = require("../models/user.model");
const Username = require("../models/username.model");


const test = (req,res) => {
    res.json({message: "API route is working properly!"})
}

const updateUser = async(req,res,next) =>{
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: {
                displayName: req.body.displayName,
                email: req.body.email,
                photoURL: req.body.photoURL
            }
        }, {new: true})

        res.status(200).json(updatedUser._doc) ;
    }
    catch(error){
        next(error)
    }
}

const deleteUser = async(req,res,next) => {
    try{
        console.log(req.params)
        const user = await User.findByIdAndDelete(req.params.id) ; 
        const id = user._id
        
        await Profile.deleteOne({userId: id}); 
        await Social.deleteOne({ userId: id});
        await Project.deleteMany({ userId: id });
        await Username.deleteOne({userId: id}) ; 
        res.status(200).json({success: true, msg: "User has been deleted successfully !"}) ; 
    }
    catch(error){
        next(error) ; 
    }
}

module.exports = {test, updateUser, deleteUser}