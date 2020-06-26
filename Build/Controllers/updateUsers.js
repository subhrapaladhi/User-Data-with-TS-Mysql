"use strict";
// UPDATE USER PROFILE DATA
const updateUser_js_1 = require("../Services/updateUser.js");
const bcrypt_1 = require("bcrypt");
module.exports = {
    updateUsers: (req, res) => {
        const body = req.body;
        const salt = bcrypt_1.genSaltSync(10);
        body.password = bcrypt_1.hashSync(body.password, salt);
        updateUser_js_1.updateUser(body, (error, results) => {
            if (error) {
                console.log(error);
                return res.status(500).json({
                    success: 0,
                    message: "database error"
                });
            }
            return res.json({
                success: 1,
                message: `updated successfully`
            });
        });
    }
};
