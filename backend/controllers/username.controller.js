const Username = require("../models/username.model");

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

// const updateUser = async(req,res,next) =>{
//     try {
//         const updatedUser = await User.findByIdAndUpdate(req.params.id, {
//             $set: {
//                 displayName: req.body.displayName,
//                 email: req.body.email,
//                 photoURL: req.body.photoURL
//             }
//         }, {new: true})

//         res.status(200).json(updatedUser._doc) ;
//     }
//     catch(error){
//         next(error)
//     }
// }

const updateUsername = (req,res,next) => {

}
module.exports = {updateUsername, createUsername}