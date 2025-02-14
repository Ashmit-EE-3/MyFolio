const express = require('express')
const { oAuth } = require('../controllers/auth.controller')
const router = express.Router()

router.route('/oAuth').post(oAuth)

module.exports = router
