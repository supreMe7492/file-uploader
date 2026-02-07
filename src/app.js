const express = require("express");
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.send("<h1>pussy</h1>");
})
app.listen(3000,()=>{
    console.log("pussy");
});