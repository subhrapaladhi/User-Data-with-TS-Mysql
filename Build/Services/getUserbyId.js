"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserId = void 0;
// GET USER BY ID
const dbconnect_js_1 = require("../Config/dbconnect.js");
exports.getUserId = (id, callback) => {
    dbconnect_js_1.pool.query(`select id, firstname, lastname, email, number from registration where id = ?`, [id], (error, results, fields) => {
        if (error) {
            return callback(error);
        }
        return callback(null, results[0]);
    });
};
