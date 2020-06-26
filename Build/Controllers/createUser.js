"use strict";
// CREATE A NEW USER PROFILE
const createUser_js_1 = require("../Services/createUser.js");
const bcrypt_1 = require("bcrypt");
module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        const salt = bcrypt_1.genSaltSync(10);
        body.password = bcrypt_1.hashSync(body.password, salt);
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
    }
};
