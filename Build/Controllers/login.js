"use strict";
// ROUTE FOR USER LOGIN. JWT TOKEN IS SEND IN RESPONSE
const getUserbyEmail_js_1 = require("../Services/getUserbyEmail.js");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
module.exports = {
    login: (req, res) => {
        const body = req.body;
        getUserbyEmail_js_1.getUserbyEmail(body.email, (err, results) => {
            if (err) {
                return res({
                    success: 0,
                    data: "invalid email or password"
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
                results.password = undefined;
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
    }
};
