const express = require('express') ; 
const { createProject } = require('../controllers/project.controller');

const router = express.Router() 

router.route('/create').post(createProject)

module.exports = router ; 