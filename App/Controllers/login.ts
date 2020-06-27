// ROUTE FOR USER LOGIN. JWT TOKEN IS SEND IN RESPONSE
import {Request, Response} from "express";
import {getUserbyEmail} from "../Services/getUserbyEmail.js";
import { compareSync } from "bcrypt";
import { sign } from "jsonwebtoken"; 
import { userdataInf } from '../Interfaces/userDataInf';

export const login = (req:Request, res:Response) => {
    const body = req.body;
    getUserbyEmail(body.email, (err: Error, results: userdataInf) => {
        if(err){
            return res.json({
                success: 0,
                data: "database error"
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
            delete results.password;
            const jsontoken: string = sign({result: results},<string>process.env.jwtkey, {
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