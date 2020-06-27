"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
// CREATE USER
const dbconnect_js_1 = require("../Config/dbconnect.js");
exports.create = (data, callback) => {
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
};
