// GET USER BY EMAIL

import {pool} from '../Config/dbconnect.js';

export = {
    getUserbyEmail: (email, callback) => {
        pool.query(
            `select * from registration where email = ?`,
            [email],
            (error, results, fields) => {
                if(error){
                    callback(error);
                }
                return callback(null, results[0]);
            }
        )
    }
}