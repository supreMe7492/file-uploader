const {createFolder} = require('../db/query');

async function addFolder(req,res){
    const authorId = req.user.id;
    const parentId = req.params.folderId || null;
    const folderName = req.body.folderName;
    await createFolder(folderName,parentId,authorId);
    res.redirect('/');
}

module.exports = {addFolder};