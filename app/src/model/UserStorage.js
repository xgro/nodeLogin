"use strict";

class UserStorage{
    static #users = {
        id : ["xgro", "나개발", "김코딩"],
        psword : ["1234","1234","123456"],
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
};

module.exports = UserStorage;