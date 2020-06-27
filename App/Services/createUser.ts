// CREATE USER
const {pool} = require('../Config/dbconnect.js');

export const create = (data, callback:Function) => {
    pool.query(
        `insert into registration(firstname, lastname, email, password, number) 
        values(?,?,?,?,?) `,
        [
            data.firstname,
            data.lastname,
            data.email,
            data.password,
            data.number
        ],
        (error:any, results: object, fields:any) => {
            if(error){
                return callback(error);
            }
            return callback(null, results);
        }
    )
}