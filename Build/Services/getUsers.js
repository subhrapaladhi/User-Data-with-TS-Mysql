"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
// GET ALL USERS DATA
const dbconnect_js_1 = require("../Config/dbconnect.js");
exports.getUsers = (callback) => {
    dbconnect_js_1.pool.query(`select id, firstname, lastname, email, number from registration`, [], (error, results, fields) => {
        if (error) {
            return callback(error);
        }
        return callback(null, results);
    });
};
