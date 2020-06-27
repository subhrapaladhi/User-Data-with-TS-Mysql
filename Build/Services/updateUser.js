"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = void 0;
// UPDATE USER DATA
const dbconnect_js_1 = require("../Config/dbconnect.js");
exports.updateUser = (data, callback) => {
    dbconnect_js_1.pool.query(`update registration set firstname=?, lastname=?, email=?, password=?, number=? where id=?`, [
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
