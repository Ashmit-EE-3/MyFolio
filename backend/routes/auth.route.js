const express = require('express')
const { oAuth, logout } = require('../controllers/auth.controller')
const router = express.Router()

router.route('/oAuth').post(oAuth)
router.route('/logout').get(logout)
module.exports = router
