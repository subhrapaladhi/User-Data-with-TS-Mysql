"use strict";
// CREATE USER
const dbconnect_js_1 = require("../Config/dbconnect.js");
module.exports = {
    create: (data, callback) => {
        dbconnect_js_1.pool.query(`insert into registration(firstname, lastname, email, password, number) 
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
