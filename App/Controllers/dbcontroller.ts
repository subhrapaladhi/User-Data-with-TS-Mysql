import {    create, 
            getUserId, 
            getUsers, 
            updateUser, 
            deleteUser,
            getUserbyEmail } from "../Services/services.js";

import {    genSaltSync, 
            hashSync,
            compareSync } from "bcrypt";

import { sign } from "jsonwebtoken"; 

export = {
    login: (req, res) => {
        const body = req.body;
        getUserbyEmail(body.email, (err, results) => {
            if(err){
                return res({
                    success: 0,
                    data: "invalid email or password"
                });
            }
            if(!results){
                return res.json({
                    success: 0,
                    data: "invalid email or password"
                });
            }
            const result = compareSync(body.password, results.password);
            if(result){
                results.password = undefined;
                const jsontoken = sign({result: results}, process.env.jwtkey, {
                    expiresIn: "1h"
                })
                return res.json({
                    success: 1,
                    message: "login successful",
                    token: jsontoken
                });
            } else {
                return res.json({
                    success: 0,
                    data: "invalid email or password"
                });
            }
        })
    },
    createUser: (req: object|any, res: object|any) => {
        const body: object = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt)
        create(body, (err, results) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "database connection error"
                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            })
        })
    },
    getUserbyUserId: (req, res) => {
        const id = req.params.id;
        getUserId(id, (err, results) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "database connection error"
                })
            }
            if(!results){
                return res.json({
                    success: 0,
                    message: "record not found"
                });
            }
            return res.status(200).json({
                success: 1, 
                data: results
            });
        })
    },
    getUsers: (req, res) => {
        getUsers((error, results) => {
            if(error){
                console.log(error);
                return res.status(500).json({
                    success: 0,
                    message: "database error"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        })
    },
    updateUsers: (req, res) => {
        const body: object = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        updateUser(body, (error, results) => {
            if(error){
                console.log(error);
                return res.status(500).json({
                    success: 0,
                    message: "database error"
                });
            }
            return res.json({
                success: 1,
                message: `updated successfully`
            });
        })
    },
    deleteUser: (req, res) => {
        const id = req.params.id;
        deleteUser(id, (err, results) => {
            if(err){
                console.log(error);
                return res.status(500).json({
                    success: 0,
                    message: "database error"
                });
            }
            if(results==0){
                return res.json({
                    success: 0,
                    message: "record not found"
                });    
            }
            return res.json({
                success: 1,
                message: "record deleted"
            });
        })
    }
}