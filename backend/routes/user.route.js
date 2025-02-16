const express = require('express')
const { test, deleteUser, updateUser } = require('../controllers/user.controller')

const router = express.Router()

router.route('/test').get(test)
router.route('/update/:id').put(updateUser)
router.route('/delete/:id').delete(deleteUser)
module.exports = router 