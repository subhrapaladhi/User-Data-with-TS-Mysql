import { createUser, getUserbyUserId, getUsers, updateUsers, deleteUser } from "./Controllers/dbcontroller";
import express from "express";
const router = express.Router();

// CREATE NEW USER
router.post("/", createUser);

// GET USER BY ID
router.get("/:id", getUserbyUserId);

// GET ALL USERS DATA
router.get("/", getUsers);

// UPDATE USER DATA
router.put("/", updateUsers);

// DELETE USER
router.delete("/:id", deleteUser);


export = router;