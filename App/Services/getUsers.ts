// GET ALL USERS DATA

const {pool} = require('../Config/dbconnect.js');

export const getUsers = (callback: Function ) => {
    pool.query(
        `select id, firstname, lastname, email, number from registration`,
        [],
        (error: any, results: object[], fields:any) => {
            if(error){
                return callback(error);
            }
            return callback(null, results);
        }
    )
}