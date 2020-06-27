"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getallUsers = void 0;
const getUsers_js_1 = require("../Services/getUsers.js");
exports.getallUsers = (req, res) => {
    getUsers_js_1.getUsers((error, results) => {
        if (error) {
            console.log(error);
            return res.status(500).json({
                success: 0,
                message: "database error"
            });
        }
        return res.json({
            success: 1,
            data: results
        });
    });
};
