"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
// IMPORTING ENV VARIABLES
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mysql_1 = require("mysql");
const pool = mysql_1.createPool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.MYSQL_DB,
    connectionLimit: 10
});
module.exports = { pool };
