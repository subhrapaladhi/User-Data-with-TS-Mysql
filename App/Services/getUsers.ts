// GET ALL USERS DATA

import {pool} from '../Config/dbconnect.js';

export = {
    getUsers: callback => {
        pool.query(
            `select id, firstname, lastname, email, number from registration`,
            [],
            (error, results, fields) => {
                if(error){
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    }
}