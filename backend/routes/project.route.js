const express = require('express') ; 
const { createProject, getProject, deleteProject } = require('../controllers/project.controller');

const router = express.Router() 

router.route('/create').post(createProject)
router.route('/get/:id').get(getProject)
router.route('/delete/:id').delete(deleteProject)

module.exports = router ; 