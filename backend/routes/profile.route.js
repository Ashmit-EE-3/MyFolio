const express = require('express') ; 
const { createProfile, getProfile } = require('../controllers/profile.controller');

const router = express.Router() 

router.route('/create').post(createProfile)
router.route('/update/:id').get(getProfile)
module.exports = router ; 