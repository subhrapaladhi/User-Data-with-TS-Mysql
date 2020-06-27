"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const getUserbyEmail_js_1 = require("../Services/getUserbyEmail.js");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
exports.login = (req, res) => {
    const body = req.body;
    getUserbyEmail_js_1.getUserbyEmail(body.email, (err, results) => {
        if (err) {
            return res.json({
                success: 0,
                data: "database error"
            });
        }
        if (!results) {
            return res.json({
                success: 0,
                data: "invalid email or password"
            });
        }
        const result = bcrypt_1.compareSync(body.password, results.password);
        if (result) {
            delete results.password;
            const jsontoken = jsonwebtoken_1.sign({ result: results }, process.env.jwtkey, {
                expiresIn: "1h"
            });
            return res.json({
                success: 1,
                message: "login successful",
                token: jsontoken
            });
        }
        else {
            return res.json({
                success: 0,
                data: "invalid email or password"
            });
        }
    });
};
