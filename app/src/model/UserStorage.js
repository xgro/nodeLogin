"use strict";

const db = require("../config/db");

class UserStorage{
    static getUserInfo(inputId){
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?;";
            db.query(query, [inputId], (err, data) => {
                if (err) reject(`${err}`);
                resolve(data[0]);
            });
        });
    }

    static save(userInfo){
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(id, name, psword) VALUES(?,?,?);";
            db.query(
                query, 
                [userInfo.id, userInfo.name, userInfo.passwd], 
                (err) => {
                    if (err) reject(`${err}`);
                    resolve({ success: true });
            });
        });
    }
};

module.exports = UserStorage;