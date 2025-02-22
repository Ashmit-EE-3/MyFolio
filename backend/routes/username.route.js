const express = require('express')
const { createUsername, updateUsername } = require('../controllers/username.controller')

const router = express.Router()

router.route('/create').post(createUsername)
router.route('/update/:id').put(updateUsername)
module.exports = router 