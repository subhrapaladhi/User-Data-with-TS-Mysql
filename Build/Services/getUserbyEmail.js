"use strict";
// GET USER BY EMAIL
const dbconnect_js_1 = require("../Config/dbconnect.js");
module.exports = {
    getUserbyEmail: (email, callback) => {
        dbconnect_js_1.pool.query(`select * from registration where email = ?`, [email], (error, results, fields) => {
            if (error) {
                callback(error);
            }
            return callback(null, results[0]);
        });
    }
};
