"use strict";

const home = (req, res) => {
    // function
    res.render("home/index");
};

const login = (req, res) => {
    // function
    res.render("home/login");
};

module.exports = {
    home,
    login,
};