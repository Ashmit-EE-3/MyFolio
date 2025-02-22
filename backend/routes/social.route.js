const express = require('express') ; 
const { createSocial, getSocial } = require('../controllers/social.controller');

const router = express.Router() 

router.route('/create').post(createSocial)
router.route('/get/:id').get(getSocial)
module.exports = router ; 