const User = require("../models/user.model");


const test = (req,res) => {
    res.json({message: "API route is working properly!"})
}

const deleteUser = async(req,res,next) => {
    try{
        await User.findOneAndDelete({email : req.params.email}) ; 
        res.status(200).json({success: true, msg: "User has been deleted successfully !"}) ; 
    }
    catch(error){
        next(error) ; 
    }
}
module.exports = {test, deleteUser}