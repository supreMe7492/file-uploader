const {Router} = require('express');
const fileUpload = Router({ mergeParams: true });
const multer  = require('multer');
const {addFile} = require('../controllers/fileController');
const upload = multer({ dest: '../../uploads/' })
fileUpload.get('/',(req,res)=>{
    res.render('upload', {
        folderId: req.params.folderId || null
    })
})
fileUpload.post('/', upload.single('uploaded_file'),addFile);

module.exports = fileUpload;