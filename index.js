const express = require("express");
const mongoose = require("mongoose");
const petRoute = require("./controller/petRoute");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

mongoose.set("strictQuery",true); //Deprection Warning //To supress warning
mongoose.connect("mongodb+srv://reunite:98765@cluster0.wnu0vqh.mongodb.net/pets");
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error occurred"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/petRoute",petRoute);

app.listen(4000,()=>{
    console.log("Server started at 4000");
})
