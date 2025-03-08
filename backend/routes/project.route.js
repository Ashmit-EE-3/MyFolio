const express = require('express') ; 
const { createProject, getProject, deleteProject, updateProject } = require('../controllers/project.controller');

const router = express.Router() 

router.route('/create').post(createProject)
router.route('/get/:id').get(getProject)
router.route('/delete/:id').delete(deleteProject)
router.route('/update/:id').put(updateProject)

module.exports = router ; 