const Social = require("../models/social.model")

const createSocial = async (req, res, next) => {
    try {
        const socialData = await Social.findOne({userId: req.body.userId}) ; 
        console.log("Social Data is : ",socialData) ; 
        if (socialData){
            const updatedSocial = await Social.findByIdAndUpdate(socialData._id,{
                $set: req.body
            }, {new: true, runValidators: true})
            res.status(201).json(updatedSocial)
        }
        else {
            const newSocial = await Social.create(req.body)
            res.status(201).json(newSocial)
        }
    }
    catch (error) {
        next(error)
    }
}

module.exports = { createSocial }