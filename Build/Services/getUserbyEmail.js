"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserbyEmail = void 0;
// GET USER BY EMAIL
const dbconnect_js_1 = require("../Config/dbconnect.js");
exports.getUserbyEmail = (email, callback) => {
    dbconnect_js_1.pool.query(`select * from registration where email = ?`, [email], (error, results, fields) => {
        if (error) {
            return callback(error);
        }
        return callback(null, results[0]);
    });
};
