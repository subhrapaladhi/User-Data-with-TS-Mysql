// GET USER DATA USING USER ID
import {Request, Response} from "express";
import { getUserId } from "../Services/getUserbyId.js";

export const getUserbyUserId = (req:Request, res:Response) => {
    const id = req.params.id;
    getUserId(id, (err:object, results: object) => {
        if(err){
            console.log(err);
            return res.status(500).json({
                success: 0,
                message: "database connection error"
            })
        }
        if(!results){
            return res.json({
                success: 0,
                message: "record not found"
            });
        }
        return res.status(200).json({
            success: 1, 
            data: results
        });
    })
}