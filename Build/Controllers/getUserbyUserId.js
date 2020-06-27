"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserbyUserId = void 0;
const getUserbyId_js_1 = require("../Services/getUserbyId.js");
exports.getUserbyUserId = (req, res) => {
    const id = req.params.id;
    getUserbyId_js_1.getUserId(id, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                success: 0,
                message: "database connection error"
            });
        }
        if (!results) {
            return res.json({
                success: 0,
                message: "record not found"
            });
        }
        return res.status(200).json({
            success: 1,
            data: results
        });
    });
};
