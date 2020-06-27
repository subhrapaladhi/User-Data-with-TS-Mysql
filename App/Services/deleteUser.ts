// DELETE USER
import {pool} from '../Config/dbconnect.js';
import { MysqlError, FieldInfo } from 'mysql';

export const deleteUser = (id:string, callback:Function) => {
    pool.query(
        `delete from registration where id=?`,
        [id],
        (error:MysqlError|null, result:any, fields:FieldInfo[]|undefined) => {
            if(error){
                return callback(error);
            }
            return callback(null, result.affectedRows)
        }
    )
}