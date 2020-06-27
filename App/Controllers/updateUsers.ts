// UPDATE USER PROFILE DATA
import {Request, Response} from "express";
import { updateUser } from "../Services/updateUser.js";
import { genSaltSync, hashSync} from "bcrypt";

export const updateUsers = (req:Request, res:Response) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    updateUser(body, (error:Error, results:any) => {
        if(error){
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
    })
}