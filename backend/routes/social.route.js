const express = require('express') ; 
const { createSocial } = require('../controllers/social.controller');

const router = express.Router() 

router.route('/create').post(createSocial)

module.exports = router ; 