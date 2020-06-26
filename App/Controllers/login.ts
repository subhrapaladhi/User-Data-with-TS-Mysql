// ROUTE FOR USER LOGIN. JWT TOKEN IS SEND IN RESPONSE

import {getUserbyEmail} from "../Services/getUserbyEmail.js";
import { compareSync } from "bcrypt";
import { sign } from "jsonwebtoken"; 

export = {
    login: (req, res) => {
        const body = req.body;
        getUserbyEmail(body.email, (err, results) => {
            if(err){
                return res({
                    success: 0,
                    data: "invalid email or password"
                });
            }
            if(!results){
                return res.json({
                    success: 0,
                    data: "invalid email or password"
                });
            }
            const result = compareSync(body.password, results.password);
            if(result){
                results.password = undefined;
                const jsontoken = sign({result: results}, process.env.jwtkey, {
                    expiresIn: "1h"
                })
                return res.json({
                    success: 1,
                    message: "login successful",
                    token: jsontoken
                });
            } else {
                return res.json({
                    success: 0,
                    data: "invalid email or password"
                });
            }
        })
    }
}
