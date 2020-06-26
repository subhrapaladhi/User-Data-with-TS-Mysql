"use strict";
const services_js_1 = require("../Services/services.js");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
module.exports = {
    login: (req, res) => {
        const body = req.body;
        services_js_1.getUserbyEmail(body.email, (err, results) => {
            if (err) {
                return res({
                    success: 0,
                    data: "invalid email or password"
                });
            }
            if (!results) {
                return res.json({
                    success: 0,
                    data: "invalid email or password"
                });
            }
            const result = bcrypt_1.compareSync(body.password, results.password);
            if (result) {
                results.password = undefined;
                const jsontoken = jsonwebtoken_1.sign({ result: results }, process.env.jwtkey, {
                    expiresIn: "1h"
                });
                return res.json({
                    success: 1,
                    message: "login successful",
                    token: jsontoken
                });
            }
            else {
                return res.json({
                    success: 0,
                    data: "invalid email or password"
                });
            }
        });
    },
    createUser: (req, res) => {
        const body = req.body;
        const salt = bcrypt_1.genSaltSync(10);
        body.password = bcrypt_1.hashSync(body.password, salt);
        services_js_1.create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getUserbyUserId: (req, res) => {
        const id = req.params.id;
        services_js_1.getUserId(id, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "database connection error"
                });
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "record not found"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getUsers: (req, res) => {
        services_js_1.getUsers((error, results) => {
            if (error) {
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
        });
    },
    updateUsers: (req, res) => {
        const body = req.body;
        const salt = bcrypt_1.genSaltSync(10);
        body.password = bcrypt_1.hashSync(body.password, salt);
        services_js_1.updateUser(body, (error, results) => {
            if (error) {
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
        });
    },
    deleteUser: (req, res) => {
        const id = req.params.id;
        services_js_1.deleteUser(id, (err, results) => {
            if (err) {
                console.log(error);
                return res.status(500).json({
                    success: 0,
                    message: "database error"
                });
            }
            if (results == 0) {
                return res.json({
                    success: 0,
                    message: "record not found"
                });
            }
            return res.json({
                success: 1,
                message: "record deleted"
            });
        });
    }
};
