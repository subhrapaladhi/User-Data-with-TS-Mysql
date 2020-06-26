// // GET USER DATA OF ALL USERS

import { getUsers } from "../Services/getUsers.js";

export = {
    getUsers: (req, res) => {
        getUsers((error, results) => {
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
}