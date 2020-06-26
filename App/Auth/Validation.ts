import { verify } from "jsonwebtoken";
import { delete } from "router";

export = {
    // CHECK IF JWT TOKEN IS VALID
    checkToken: (req, res, next) => {
        let token = req.get("authorization");
        if(token){
            token = token.slice(7);
            verify(token, process.env.jwtkey, (err, decoded) => {
                if(err){
                    res.json({
                        success: 0,
                        message: "invalid token"
                    })        
                } else {
                    delete req.userid; 
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
    // VERIFY IF UPDATE/DELETE REQUEST IS FOR THE USER'S OWN ACCOUNT
    checkAccount: (req, res, next) => {
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