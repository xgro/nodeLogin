"use strict";


const output = {
    home : (req, res) => {
        // function
        res.render("home/index");
    },
    login : (req, res) => {
        // function
        res.render("home/login");
    },
};


const users = {
    id : ["xgro", "나개발", "김코딩"],
    psword : ["1234","1234","123456"],
};



const process = {
    login : (req, res) => {
        const id = req.body.id;
        const psword = req.body.psword;

        if ( users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if ( users.psword[idx]){
                return res.json({
                    success : true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다."
        });
    },
};




module.exports = {
    output,
    process,
};