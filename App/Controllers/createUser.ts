// CREATE A NEW USER PROFILE

import {create} from "../Services/createUser.js";
import { genSaltSync, hashSync } from "bcrypt";

export = {
    createUser: (req: object|any, res: object|any) => {
        const body: object = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt)
        create(body, (err, results) => {
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
}