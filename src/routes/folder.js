const {Router} = require('express');
const {addFolder} =require('../controllers/folderController')
const folder = Router({ mergeParams: true });
folder.get('/',(req,res)=>{
    res.render('folder',{
        parentId : req.params.parentId || null
    })
})

folder.post('/',addFolder);


module.exports = folder;
