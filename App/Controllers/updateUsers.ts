// UPDATE USER PROFILE DATA

import { updateUser } from "../Services/updateUser.js";
import { genSaltSync, hashSync} from "bcrypt";

export = {
    updateUsers: (req, res) => {
        const body: object = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        updateUser(body, (error, results) => {
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
}