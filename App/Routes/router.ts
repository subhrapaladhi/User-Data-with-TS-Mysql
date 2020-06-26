// IMPORT EXPRESS
import express from "express";
const router = express.Router();

// IMPORT CONTROLLERS
import { login } from "../Controllers/login.js"
import { createUser } from "../Controllers/createUser.js"
import { getUsers } from "../Controllers/getUsers.js"
import { getUserbyUserId } from "../Controllers/getUserbyUserId.js"
import { updateUsers } from "../Controllers/updateUsers.js"
import { deleteUser } from "../Controllers/deleteUser.js"

// AUTHENTICATION AND AUTHORIZATION
import { checkToken, checkAccount } from "../Auth/Validation.js";



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