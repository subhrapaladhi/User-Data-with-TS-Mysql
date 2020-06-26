import {pool} from '../Config/database.js';

export = {
    create: (data, callback) => {
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
            (error, results, fields) => {
                if(error){
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    }
}