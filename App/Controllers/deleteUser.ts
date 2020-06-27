// DELETE A USER PROFILE
import {Request, Response} from "express";
import { deleteUser } from "../Services/deleteUser.js";

export const deleteuser = (req:Request, res:Response) => {
    const id = req.params.id;
    deleteUser(id, (error:Error, count:number) => {
        if(error){
            console.log(error);
            return res.status(500).json({
                success: 0,
                message: "database error"
            });
        }
        if(count==0){
            return res.json({
                success: 0,
                message: "record not found"
            });    
        }
        return res.json({
            success: 1,
            message: "record deleted"
        });
    })
}
