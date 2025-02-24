const Social = require("../models/social.model")

const getSocial = async (req, res, next) => {
    try {
        const socialData = await Social.findOne({ userId: req.params.id });
        res.status(201).json(socialData)
    }
    catch (error) {
        next(error)
    }
}
const createSocial = async (req, res, next) => {
    try {
        const socialData = await Social.findOne({ userId: req.body.userId });
        console.log("Social Data is : ", socialData) 
        if (socialData) {
            await Social.findByIdAndDelete(socialData._id);
        }
        const newSocial = await Social.create(req.body)
        res.status(201).json(newSocial)
    }
    catch (error) {
        next(error)
    }
}

module.exports = { getSocial, createSocial }