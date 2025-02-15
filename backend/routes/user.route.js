const express = require('express')
const { test, deleteUser } = require('../controllers/user.controller')

const router = express.Router()

router.route('/test').get(test)
router.route('/delete').delete(deleteUser)
module.exports = router 