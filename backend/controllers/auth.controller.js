const User = require("../models/user.model")
const bcryptjs = require('bcryptjs')
const dotenv = require('dotenv')
dotenv.config()
const jwt = require("jsonwebtoken")
const errorHandler = require("../utils/error")

const signup = async (req, res, next) => {
    const { username, email, password, avatar } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);

    try {
        const validUser = await User.findOne({ email })
        if (validUser) return next(errorHandler(409, "User already exists!"))
        const user = await User.create({ username, email, password: hashedPassword, avatar })
        res.status(201).json({ success: true, data: user })
    }
    catch (error) {
        next(error)
    }
}

const signin = async (req, res, next) => {
    const { email, password } = req.body
    try {
        const validUser = await User.findOne({ email })
        if (!validUser) return next(errorHandler(404, "user not found !"))

        const validPassword = bcryptjs.compareSync(password, validUser.password)
        if (!validPassword) return next(errorHandler(401, "Invalid Password !"))

        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET)
        const { password: pass, ...userInfo } = validUser._doc


        res.cookie('access_token', token, { httpOnly: true }).status(200).json({ success: true, data: userInfo })
    }
    catch (error) {
        next(error)
    }
}

const google = async (req, res, next) => {
    try {
        const { username, email, avatar} = req.body;
        const validUser = await User.findOne({ email });

        if (validUser) {
            const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET)
            const { password: pass, ...userInfo } = validUser._doc
            res
                .cookie('access_token', token, { httpOnly: true })
                .status(200)
                .json(userInfo)
        }
        else {
            const newUserName = username.split(" ").join('') + Math.random().toString(36).slice(-4)
            const password = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8)
            const hashedPassword = bcryptjs.hashSync(password, 10);
            
            const newUser = await User.create({username: newUserName, password: hashedPassword, email, avatar})

            const token = jwt.sign({id: newUser._id}) ; 
            const {password: pass, ...userInfo} = newUser._doc ; 
  
            res
            .cookie("access_token", token, {httpOnly: true})
            .status(200)
            .json(userInfo)

        }
    } catch(error){
        next(error)
    }
}

module.exports = { signup, signin, google} 