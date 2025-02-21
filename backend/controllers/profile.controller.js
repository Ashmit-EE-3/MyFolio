const Profile = require("../models/profile.model")

const createProfile = async(req,res,next) => {
    try{
        const profileData = await Profile.findOne({userId: req.body.userId}) ;

        if (profileData) {
            const updatedProfile = await Profile.findByIdAndUpdate(profileData._id,{
                $set: req.body
            }, {new: true, runValidators: true})

            return res.status(201).json(updatedProfile) ; 
        }
        else {
            const newProfile = await Profile.create(req.body)
            return res.status(201).json(newProfile) 
        }
    }
    catch(error){
        next(error)
    }
}

module.exports = {createProfile}