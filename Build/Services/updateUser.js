"use strict";
// UPDATE USER DATA
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = void 0;
const { pool } = require('../Config/dbconnect.js');
exports.updateUser = (data, callback) => {
    pool.query(`update registration set firstname=?, lastname=?, email=?, password=?, number=? where id=?`, [
        data.firstname,
        data.lastname,
        data.email,
        data.password,
        data.number,
        data.id
    ], (error, results, fields) => {
        if (error) {
            callback(error);
        }
        return callback(null, results);
    });
};
