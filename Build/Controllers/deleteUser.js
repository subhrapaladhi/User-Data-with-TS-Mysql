"use strict";
// DELETE A USER PROFILE
const deleteUser_js_1 = require("../Services/deleteUser.js");
module.exports = {
    deleteUser: (req, res) => {
        const id = req.params.id;
        deleteUser_js_1.deleteUser(id, (err, results) => {
            if (err) {
                console.log(error);
                return res.status(500).json({
                    success: 0,
                    message: "database error"
                });
            }
            if (results == 0) {
                return res.json({
                    success: 0,
                    message: "record not found"
                });
            }
            return res.json({
                success: 1,
                message: "record deleted"
            });
        });
    }
};
