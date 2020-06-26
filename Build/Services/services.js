"use strict";
const database_js_1 = require("../Config/database.js");
module.exports = {
    create: (data, callback) => {
        database_js_1.pool.query(`insert into registration(firstname, lastname, email, password, number) 
            values(?,?,?,?,?) `, [
            data.firstname,
            data.lastname,
            data.email,
            data.password,
            data.number
        ], (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, results);
        });
    },
    getUsers: callback => {
        database_js_1.pool.query(`select id, firstname, lastname, email, number from registration`, [], (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, results);
        });
    },
    getUserId: (id, callback) => {
        database_js_1.pool.query(`select id, firstname, lastname, email, number from registration where id = ?`, [id], (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, results[0]);
        });
    },
    updateUser: (data, callback) => {
        database_js_1.pool.query(`update registration set firstname=?, lastname=?, email=?, password=?, number=? where id=?`, [
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
    },
    deleteUser: (id, callback) => {
        database_js_1.pool.query(`delete from registration where id=?`, [id], (error, result, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, result.affectedRows);
        });
    }
};
