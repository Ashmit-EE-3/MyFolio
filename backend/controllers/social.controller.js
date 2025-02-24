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
        if (socialData) {
            await Social.findByIdAndDelete(req.body._id);
        }
        const newSocial = await Social.create(req.body)
        res.status(201).json(newSocial)
    }
    catch (error) {
        next(error)
    }
}

module.exports = { getSocial, createSocial }