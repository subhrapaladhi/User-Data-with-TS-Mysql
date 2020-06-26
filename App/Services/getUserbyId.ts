// GET USER BY ID

import {pool} from '../Config/dbconnect.js';

export = {
    getUserId: (id, callback) => {
        pool.query(
            `select id, firstname, lastname, email, number from registration where id = ?`,
            [id],
            (error, results, fields) => {
                if(error){
                    return callback(error);
                }
                return callback(null, results[0]);
            }
        )
    }
}