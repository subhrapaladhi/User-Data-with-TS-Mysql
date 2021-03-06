// IMPORTING ENV VARIABLES
import dotenv from "dotenv";
dotenv.config();

import {createPool} from "mysql";

// ESTABLISH A CONNECTION WITH DATABASE WHICH CAN BE USED FOR EXECUTING QUERIES.
export const pool = createPool({
    port : Number(process.env.DB_PORT),
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.MYSQL_DB,
    connectionLimit: 10
})