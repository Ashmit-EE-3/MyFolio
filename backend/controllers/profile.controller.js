const Profile = require("../models/profile.model")

const createProfile = async(req,res,next) => {
    try{
        const profile = await Profile.create(req.body) ;
        return res.status(201).json(profile) ; 
    }
    catch(error){
        next(error)
    }
}

module.exports = {createProfile}