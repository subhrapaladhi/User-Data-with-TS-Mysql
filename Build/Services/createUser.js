"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
// CREATE USER
const { pool } = require('../Config/dbconnect.js');
exports.create = (data, callback) => {
    pool.query(`insert into registration(firstname, lastname, email, password, number) 
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
