// UPDATE USER DATA
import {pool} from '../Config/dbconnect.js';
import { MysqlError, FieldInfo } from 'mysql';
import { userdataInf } from '../Interfaces/userDataInf';

export const updateUser = (data:userdataInf, callback:Function) => {
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
        (error:MysqlError|null, results:object, fields:FieldInfo[]|undefined) => {
            if(error){
                callback(error);
            }
            return callback(null, results);
        }
    )
}