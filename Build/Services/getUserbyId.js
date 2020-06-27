"use strict";
// GET USER BY ID
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserId = void 0;
const { pool } = require('../Config/dbconnect.js');
exports.getUserId = (id, callback) => {
    pool.query(`select id, firstname, lastname, email, number from registration where id = ?`, [id], (error, results, fields) => {
        if (error) {
            return callback(error);
        }
        return callback(null, results[0]);
    });
};
