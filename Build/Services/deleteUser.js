"use strict";
// DELETE USER
const dbconnect_js_1 = require("../Config/dbconnect.js");
module.exports = {
    deleteUser: (id, callback) => {
        dbconnect_js_1.pool.query(`delete from registration where id=?`, [id], (error, result, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, result.affectedRows);
        });
    }
};
