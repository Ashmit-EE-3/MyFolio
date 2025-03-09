
const downloadResume = (req,res)=>{
    const {filename} = req.params ; 
    res.download(`uploads/${filename}`) ; 
}

const uploadResume = (req,res)=>{
    const fileURL = `uploads/${req.file.filename}` ; 
    res.json({fileURL})
}

module.exports = {downloadResume, uploadResume} ;