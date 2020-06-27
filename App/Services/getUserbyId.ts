// GET USER BY ID
import {pool} from '../Config/dbconnect.js';
import { MysqlError, FieldInfo } from 'mysql';

export const getUserId = (id:string, callback:Function) => {
    pool.query(
        `select id, firstname, lastname, email, number from registration where id = ?`,
        [id],
        (error:MysqlError|null, results:object[], fields:FieldInfo[]|undefined) => {
            if(error){
                return callback(error);
            }
            return callback(null, results[0]);
        }
    )
}