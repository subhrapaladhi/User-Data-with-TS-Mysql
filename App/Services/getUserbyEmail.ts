// GET USER BY EMAIL

const {pool} = require('../Config/dbconnect.js');

export const getUserbyEmail = (email:string, callback:Function) => {
    pool.query(
        `select * from registration where email = ?`,
        [email],
        (error: any, results: object[], fields: any) => {
            if(error){
                return callback(error);
            }
            return callback(null, results[0]);
        }
    )
}   