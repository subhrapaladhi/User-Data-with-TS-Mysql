import express from "express";

import {    login,
            createUser, 
            getUserbyUserId, 
            getUsers, 
            updateUsers, 
            deleteUser } from "./Controllers/dbcontroller";

import { checkToken, checkAccount } from "./Auth/Validation.js";

const router = express.Router();

// LOGIN
router.post("/login",login);

// CREATE NEW USER
router.post("/", createUser);

// GET USER BY ID
router.get("/:id", checkToken, getUserbyUserId);

// GET ALL USERS DATA
router.get("/", checkToken, getUsers);

// UPDATE USER DATA
router.put("/", checkToken, checkAccount, updateUsers);

// DELETE USER
router.delete("/:id", checkToken, checkAccount, deleteUser);


export = router;