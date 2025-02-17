const express = require('express') ; 
const { createCertificate } = require('../controllers/certificate.controller');

const router = express.Router() 

router.route('/create').post(createCertificate)

module.exports = router ; 