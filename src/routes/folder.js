const {Router} = require('express');
const {addFolder} =require('../controllers/folderController')
const folder = Router();
folder.get('/',(req,res)=>{
    res.render('folder');
})

folder.post('/',addFolder);


module.exports = folder;
