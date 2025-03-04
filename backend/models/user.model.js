const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    displayName: {
        type: String, 
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    photoURL: {
        type: String, 
        default: "https://thumbs.dreamstime.com/b/sophisticated-low-light-male-avatar-perfect-use-as-default-profile-picture-social-media-forums-dating-sites-353712307.jpg",
    },
},{timestamps: true})

const User = mongoose.model('User',userSchema)

module.exports = User 