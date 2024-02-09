const express = require("express");
const app = express();
const cookieParser = require("cookie-parser")
app.use(express.urlencoded({extended:true}));
app.use(express.json())
const cors = require("cors");


app.use(cors({
    credentials:true,
    origin:true
}));


module.exports = app;