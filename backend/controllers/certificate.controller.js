const Certificate = require("../models/certificate.model")

const createCertificate = async(req,res,next) => {
    try{
        const certificate = await Certificate.create(req.body)
    res.status(201).json(certificate)
    }
    catch(error){
        next(error)
    }
}

module.exports = {createCertificate}