"use strict";

//module
const express = require("express");
const app = express();


//routing
const home = require("./src/routes/home")


//app settings
app.set("views","./src/views");
app.set("view engine","ejs");


app.use("/", home); // use -> middleware 등록해주는 매서드.

module.exports = app;