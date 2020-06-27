// IMPORT EXPRESS
import express from "express";
const router = express.Router();

// IMPORT CONTROLLERS
import { login }           from  "../Controllers/login.js";
import { createUser }      from  "../Controllers/createUser.js"
import { getallUsers }        from  "../Controllers/getUsers.js"
import { getUserbyUserId } from  "../Controllers/getUserbyUserId.js"
import { updateUsers }     from  "../Controllers/updateUsers.js"
import { deleteuser }      from  "../Controllers/deleteUser.js"

// AUTHENTICATION AND AUTHORIZATION
const { checkToken, checkAccount } = require("../Auth/Validation.js");



// LOGIN
router.post("/login",login);

// CREATE NEW USER
router.post("/", createUser);

// GET USER BY ID
router.get("/:id", checkToken, getUserbyUserId);

// GET ALL USERS DATA
router.get("/", checkToken, getallUsers);

// UPDATE USER DATA
router.put("/", checkToken, checkAccount, updateUsers);

// DELETE USER
router.delete("/:id", checkToken, checkAccount, deleteuser);


export = router;