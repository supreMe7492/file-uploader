const {uploadFile} =require('../db/query');
async function addFile(req,res) {
    const userId = req.user.id;
    const folderId= req.params.folderId || null;
    const fileLocation = req.file.path;
    const originalName = req.file.originalname;
    await uploadFile(fileLocation,originalName,userId,folderId);
    res.redirect('/');
}

module.exports = {addFile};