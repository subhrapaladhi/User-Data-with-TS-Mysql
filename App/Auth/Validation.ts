const { verify } = require("jsonwebtoken");
import {Request, Response, NextFunction} from "express";

export = {
    // Authentication: CHECK IF JWT TOKEN IS VALID
    checkToken: (req: Request, res: Response, next: NextFunction) => {
        let token = req.get("authorization");
        if(token){
            token = token.slice(7);

            try{
                let decoded = verify(token, process.env.jwtkey);
                req.body.userid =decoded.result.id;
                next();
            } catch(error) {
                res.status(401).json({
                    success: 0,
                    message: "invalid token"
                })   
            }
        } else {
            res.json({
                success: 0,
                message: "no token"
            })
        }
    },

    // AUTHORIZATION: verify if update/delete request if for the user's own account
    checkAccount: (req: Request, res: Response, next: NextFunction) => {
        let id = req.params.id||req.body.id;
        if(req.body.userid != id){
            res.json({
                success: 0,
                message: "invalid operation"
            })
        } else {
            next();
        }
        
    }
}