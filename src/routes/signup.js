const {Router} = require("express");
const {createUser} = require("../controllers/userController");
const signUp = Router();
signUp.get('/',(req,res)=>{
    res.render("signup");
})

signUp.post('/',createUser)

module.exports = signUp;