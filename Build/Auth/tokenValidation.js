"use strict";
const jsonwebtoken_1 = require("jsonwebtoken");
module.exports = {
    checkToken: (req, res, next) => {
        let token = req.get("authorization");
        if (token) {
            token = token.slice(7);
            jsonwebtoken_1.verify(token, process.env.jwtkey, (err, decoded) => {
                if (err) {
                    res.json({
                        success: 0,
                        message: "invalid token"
                    });
                }
                else {
                    next();
                }
            });
        }
        else {
            res.json({
                success: 0,
                message: "access denied"
            });
        }
    }
};
