// GET ALL USERS DATA
import {pool} from '../Config/dbconnect.js';
import { MysqlError, FieldInfo } from 'mysql';

export const getUsers = (callback: Function ) => {
    pool.query(
        `select id, firstname, lastname, email, number from registration`,
        [],
        (error: MysqlError|null, results: object[], fields: FieldInfo[]|undefined) => {
            if(error){
                return callback(error);
            }
            return callback(null, results);
        }
    )
}