const express = require("express");
const path = require("node:path");
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.send("<h1>pussy</h1>");
})
const signUp = require("./routes/signup");
app.use('/signup',signUp);
app.listen(3000,()=>{
    console.log("pussy");
});