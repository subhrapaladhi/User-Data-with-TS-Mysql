// GET USER DATA USING USER ID

import { getUserId } from "../Services/getUserbyId.js";

export = {
    getUserbyUserId: (req, res) => {
        const id = req.params.id;
        getUserId(id, (err, results) => {
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
}