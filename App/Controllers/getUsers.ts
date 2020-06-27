// // GET USER DATA OF ALL USERS
import {Request, Response} from "express";
import { getUsers } from "../Services/getUsers.js";

export const getallUsers = (req:Request, res:Response) => {
    getUsers((error:Error, results:object) => {
        if(error){
            console.log(error);
            return res.status(500).json({
                success: 0,
                message: "database error"
            });
        }
        return res.json({
            success: 1,
            data: results
        });
    })
}