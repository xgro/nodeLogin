"use strict";

class UserStorage{
    static #users = {
        id : ["admin", "나개발", "김코딩"],
        passwd : ["1234","1234","123456"],
        name : ["차니","호영","지은"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});

        return newUsers;
    }

    static getUserInfo(inputId){
        const users = this.#users;
        const idx = users.id.indexOf(inputId);
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUser, info) =>{
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
};

module.exports = UserStorage;