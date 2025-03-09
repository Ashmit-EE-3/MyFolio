const express = require('express')  ; 
const { uploadResume, downloadResume} = require('../controllers/resume.controller');

const multer = require('multer') ;

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req,file,cb) =>{
        cb(null, Date.now() + '-' + file.originalname); 
    }
})

const upload = multer({storage}) ;


const router = express.Router() 

router.route('/upload').post(upload.single('resume'),uploadResume)
router.route('/download/:filename').get(downloadResume)

module.exports = router ; 