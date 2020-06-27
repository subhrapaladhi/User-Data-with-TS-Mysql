// UPDATE USER DATA

const {pool} = require('../Config/dbconnect.js');

export const updateUser = (data, callback:Function) => {
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
        (error:any, results:object, fields:any) => {
            if(error){
                callback(error);
            }
            return callback(null, results);
        }
    )
}