"use strict";
// GET ALL USERS DATA
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const { pool } = require('../Config/dbconnect.js');
exports.getUsers = (callback) => {
    pool.query(`select id, firstname, lastname, email, number from registration`, [], (error, results, fields) => {
        if (error) {
            return callback(error);
        }
        return callback(null, results);
    });
};
