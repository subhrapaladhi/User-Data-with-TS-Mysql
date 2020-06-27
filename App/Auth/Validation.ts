const { verify } = require("jsonwebtoken");
import {Request, Response, NextFunction} from "express";

export = {
    // Authentication: CHECK IF JWT TOKEN IS VALID
    checkToken: (req: Request, res: Response, next: NextFunction) => {
        let token = req.get("authorization");
        if(token){
            token = token.slice(7);
            verify(token, process.env.jwtkey, (err:object, decoded) => {
                if(err){
                    console.log("error = ", typeof(err), " \ndecoded = ",decoded);
                    res.json({
                        success: 0,
                        message: "invalid token"
                    })        
                } else {
                    req.userid = decoded.result.id;
                    next();
                }
            })
        } else {
            res.json({
                success: 0,
                message: "access denied"
            })
        }
    },

    // AUTHORIZATION: verify if update/delete request if for the user's own account
    checkAccount: (req: Request, res: Response, next: NextFunction) => {
        let id = req.params.id||req.body.id;
        console.log(`${req.userid} == ${id}`);
        if(req.userid != id){
            res.json({
                success: 0,
                message: "invalid operation"
            })
        } else {
            next();
        }
        
    }
}