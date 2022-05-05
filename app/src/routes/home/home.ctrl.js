"use strict";

const User = require("../../model/User");


const output = {
    home : (req, res) => {
        // function
        res.render("home/index");
    },
    login : (req, res) => {
        // function
        res.render("home/login");
    },
    register : (req, res) => {
        // function
        res.render("home/register");
    },
};


const process = {
    login : (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
};




module.exports = {
    output,
    process,
};