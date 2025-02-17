const express = require('express') ; 
const { createProfile } = require('../controllers/profile.controller');

const router = express.Router() 

router.route('/create').post(createProfile)

module.exports = router ; 