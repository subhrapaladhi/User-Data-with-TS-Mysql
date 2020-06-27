// CREATE A NEW USER PROFILE
import {Request, Response} from "express";
import {create} from "../Services/createUser.js";
const { genSaltSync, hashSync } = require("bcrypt");

export const createUser = (req: Request, res: Response) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt)
    create(body, (err:Error , results:object) => {
        if(err){
            console.log(err);
            return res.status(500).json({
                success: 0,
                message: "database connection error"
            });
        }

        return res.status(200).json({
            success: 1,
            data: results
        })
    })
}