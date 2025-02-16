const User = require("../models/user.model");


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
        await User.findByIdAndDelete(req.params.id) ; 
        res.status(200).json({success: true, msg: "User has been deleted successfully !"}) ; 
    }
    catch(error){
        next(error) ; 
    }
}

module.exports = {test, updateUser, deleteUser}