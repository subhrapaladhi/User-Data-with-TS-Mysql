// CREATE USER
import {pool} from '../Config/dbconnect.js';
import { MysqlError, FieldInfo } from 'mysql';
import { userdataInf } from '../Interfaces/userDataInf';

export const create = (data:userdataInf, callback:Function) => {
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
        (error:MysqlError|null, results: object, fields:FieldInfo[]|undefined) => {
            if(error){
                return callback(error);
            }
            return callback(null, results);
        }
    )
}