const LocalStrategy = require("passport-local").Strategy;
const {prisma} = require("./prisma");
const bcrypt = require("bcryptjs");

function usePassport(passport) {
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await prisma.user.findUnique({
            where:{username: username}
        });

        if (!user) {
          return done(null, false, { message: "user dont exist" });
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
          return done(null, false, { message: "incorrect password" });
        }
        return done(null, user);
      } catch (err) {
        done(err);
      }
    }),
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await prisma.user.findUnique({
        where : {id: id},
        select: { id: true, username: true }
      });
   
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
  return;
}
function ensureAuth(req,res,next){
  if(req.isAuthenticated()){
    return next()
  }else{
    res.redirect('/signup')
  }
}
module.exports = { usePassport,ensureAuth };