const {uploadFile} =require('../db/query');
async function addFile(req,res) {
    const userId = req.user.id;
    const fileLocation = req.file.path;
    const originalName = req.file.originalname;
    await uploadFile(fileLocation,originalName,userId);
    res.redirect('/');
}

module.exports = {addFile};