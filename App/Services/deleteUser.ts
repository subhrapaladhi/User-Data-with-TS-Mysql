// DELETE USER

import {pool} from '../Config/dbconnect.js';

export = {
    deleteUser: (id, callback) => {
        pool.query(
            `delete from registration where id=?`,
            [id],
            (error, result, fields) => {
                if(error){
                    return callback(error);
                }
                return callback(null, result.affectedRows)
            }
        )
    }
}