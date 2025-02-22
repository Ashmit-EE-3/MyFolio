const express = require('express') ; 
const { createProject, getProject } = require('../controllers/project.controller');

const router = express.Router() 

router.route('/create').post(createProject)
router.route('/get').get(getProject)
module.exports = router ; 