"use strict";


const id = document.querySelector("#id");
const name = document.querySelector("#name");
const passwd = document.querySelector("#passwd");
const confirmPasswd = document.querySelector("#confirm-passwd");
const registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
    const req = {
        id : id.value,
        name : name.value,
        passwd : passwd.value,
        confirmPasswd : confirmPasswd.value,
    }
    // console.log(req);
    fetch("/register", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success){
                location.href = "/login";
            } else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error("회원가입 중 에러 발생");
        });
}



