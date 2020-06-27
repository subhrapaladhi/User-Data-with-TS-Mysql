"use strict";
// DELETE USER
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = void 0;
const { pool } = require('../Config/dbconnect.js');
exports.deleteUser = (id, callback) => {
    pool.query(`delete from registration where id=?`, [id], (error, result, fields) => {
        if (error) {
            return callback(error);
        }
        return callback(null, result.affectedRows);
    });
};
