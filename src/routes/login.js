const {Router} = require("express");
const logIn = Router();
const passport = require('passport');
logIn.get('/',(req,res)=>{
    res.render('login');
})

logIn.post('/',  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/signup",
  }));

module.exports = logIn;

