// GET USER BY EMAIL
import {pool} from '../Config/dbconnect.js';
import { MysqlError, FieldInfo } from 'mysql';

export const getUserbyEmail = (email:string, callback:Function) => {
    pool.query(
        `select * from registration where email = ?`,
        [email],
        (error: MysqlError|null, results: object[], fields: FieldInfo[]|undefined) => {
            if(error){
                return callback(error);
            }
            return callback(null, results[0]);
        }
    )
}   