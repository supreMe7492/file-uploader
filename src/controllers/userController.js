const {signUser} = require('../db/query');
const bcrypt = require('bcryptjs');
async function createUser(req,res){
    const userName = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    if(!userName || !password || !email){
        return res.status(400).send('missing');
    }
  const hashedPassword = await bcrypt.hash(password,10);
  await signUser(userName,email,hashedPassword);
  res.redirect('/');
}

module.exports = {createUser};