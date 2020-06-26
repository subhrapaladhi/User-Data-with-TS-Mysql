// UPDATE USER DATA

import {pool} from '../Config/dbconnect.js';

export = {
    updateUser: (data, callback) => {
        pool.query(
            `update registration set firstname=?, lastname=?, email=?, password=?, number=? where id=?`,
            [
                data.firstname,
                data.lastname,
                data.email,
                data.password,
                data.number,
                data.id
            ],
            (error, results, fields) => {
                if(error){
                    callback(error);
                }
                return callback(null, results);
            }
        )
    }
}