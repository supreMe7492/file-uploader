const express = require("express");
const path = require("node:path");
const { prisma } = require('../lib/prisma');
const expressSession = require('express-session');
const { PrismaSessionStore } = require('@quixo3/prisma-session-store');
const passport = require('passport');
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  expressSession({
    cookie: {
     maxAge: 7 * 24 * 60 * 60 * 1000 // ms
    },
    secret: 'a santa at nasa',
    resave: true,
    saveUninitialized: true,
    store: new PrismaSessionStore(
      prisma,
      {
        checkPeriod: 2 * 60 * 1000,  //ms
        dbRecordIdIsSessionId: true,
        dbRecordIdFunction: undefined,
      }
    )
  })
);
app.use(passport.initialize());
app.use(passport.session());

const {usePassport} = require("../lib/passport");
usePassport(passport);

const {ensureAuth} = require('../lib/passport')

app.get("/",ensureAuth,(req,res)=>{
    res.send("<h1>pussy</h1>");
})
const signUp = require("./routes/signup");
app.use('/signup',signUp);

const logIn = require('./routes/login');
app.use('/login',logIn);

const fileUpload = require('./routes/upload');
app.use('/upload',ensureAuth,fileUpload);

const folder = require('./routes/folder');
app.use('/createfolder',folder);

app.listen(3000,()=>{
    console.log("pussy");
});