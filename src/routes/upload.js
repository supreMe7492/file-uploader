const {Router} = require('express');
const fileUpload = Router();
const multer  = require('multer');
const {addFile} = require('../controllers/fileController');
const upload = multer({ dest: '../../uploads/' })
fileUpload.get('/',(req,res)=>{
    res.render('upload')
})
fileUpload.post('/', upload.single('uploaded_file'),addFile);

module.exports = fileUpload;