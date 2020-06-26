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
    },
    getUserbyEmail: (email, callback) => {
        pool.query(
            `select * from registration where email = ?`,
            [email],
            (error, results, fields) => {
                if(error){
                    callback(error);
                }
                return callback(null, results[0]);
            }
        )
    },
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
    },
    getUserId: (id, callback) => {
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
    },
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
    },
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