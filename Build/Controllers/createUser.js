"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const createUser_js_1 = require("../Services/createUser.js");
const { genSaltSync, hashSync } = require("bcrypt");
exports.createUser = (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    createUser_js_1.create(body, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                success: 0,
                message: "database connection error"
            });
        }
        return res.status(200).json({
            success: 1,
            data: results
        });
    });
};
