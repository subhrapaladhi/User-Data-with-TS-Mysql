// DELETE USER

const {pool} = require('../Config/dbconnect.js');

export const deleteUser = (id:string, callback:Function) => {
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