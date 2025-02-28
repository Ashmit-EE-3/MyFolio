const express = require('express')
const { createUsername, updateUsername, getUsername } = require('../controllers/username.controller')

const router = express.Router()

router.route('/create').post(createUsername)
router.route('/update/:id').put(updateUsername)
router.route('/get/:id').get(getUsername) 
module.exports = router 