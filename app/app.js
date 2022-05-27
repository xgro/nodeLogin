"use strict";

//module
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();


//routing
const home = require("./src/routes/home")


//app settings
app.set("views","./src/views");
app.set("view engine","ejs");

app.use(express.static(`${__dirname}/src/public`)) // 현재 app.js 경로를 __dirname으로 정적경로로 추가
app.use(bodyParser.json());
// url을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함 될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", home); // use -> middleware 등록해주는 매서드.

module.exports = app;