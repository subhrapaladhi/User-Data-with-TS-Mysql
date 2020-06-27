"use strict";
// GET USER BY EMAIL
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserbyEmail = void 0;
const { pool } = require('../Config/dbconnect.js');
exports.getUserbyEmail = (email, callback) => {
    pool.query(`select * from registration where email = ?`, [email], (error, results, fields) => {
        if (error) {
            return callback(error);
        }
        return callback(null, results[0]);
    });
};
