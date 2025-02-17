const Social = require("../models/social.model")

const createSocial = async (req, res, next) => {
    try {
        const social = await Social.create(req.body)
        res.status(201).json(social)
    }
    catch (error) {
        next(error)
    }
}

module.exports = { createSocial }