// GET USER BY ID

const {pool} = require('../Config/dbconnect.js');

export const getUserId = (id, callback) => {
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