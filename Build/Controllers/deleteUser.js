"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteuser = void 0;
const deleteUser_js_1 = require("../Services/deleteUser.js");
exports.deleteuser = (req, res) => {
    const id = req.params.id;
    deleteUser_js_1.deleteUser(id, (error, count) => {
        if (error) {
            console.log(error);
            return res.status(500).json({
                success: 0,
                message: "database error"
            });
        }
        if (count == 0) {
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
};
