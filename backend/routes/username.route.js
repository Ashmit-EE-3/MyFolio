const express = require('express')
const { createUsername, updateUsername, getUsername, getUser, findUser } = require('../controllers/username.controller')

const router = express.Router()

router.route('/create').post(createUsername)
router.route('/update/:id').put(updateUsername)
router.route('/get/:id').get(getUsername) 
router.route('/getUser/:username').get(getUser)
router.route('/findUser/:username').get(findUser)

module.exports = router 