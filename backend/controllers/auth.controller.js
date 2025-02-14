const User = require("../models/user.model")
const dotenv = require('dotenv')
dotenv.config()
const jwt = require("jsonwebtoken")

const oAuth = async (req, res, next) => {
    try {
        const { displayName, email, photoURL} = req.body;
        const validUser = await User.findOne({ email });

        if (validUser) {
            const token = jwt.sign({ id: validUser._id },process.env.JWT_SECRET)
            res
                .cookie('access_token', token, { httpOnly: true })
                .status(200)
                .json(validUser._doc)
        }
        else {
            const newUser = await User.create({displayName, email, photoURL})
            const token = jwt.sign({id: newUser._id},process.env.JWT_SECRET) ;  
  
            res
            .cookie("access_token", token, {httpOnly: true})
            .status(200)
            .json(newUser._doc) 

        }
    } catch(error){
        next(error) ; 
    }
}

module.exports = {oAuth} 