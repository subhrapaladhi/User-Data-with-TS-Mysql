"use strict";
const database_js_1 = require("../Config/database.js");
module.exports = {
    create: (data, callback) => {
        database_js_1.pool.query(`insert into registration(firstname, lastname, email, password, number) 
            values(?,?,?,?,?) `, [
            data.firstname,
            data.lastname,
            data.email,
            data.password,
            data.number
        ], (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, results);
        });
    }
};
