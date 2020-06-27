"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
// IMPORT EXPRESS
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// IMPORT CONTROLLERS
const login_js_1 = require("../Controllers/login.js");
const createUser_js_1 = require("../Controllers/createUser.js");
const getUsers_js_1 = require("../Controllers/getUsers.js");
const getUserbyUserId_js_1 = require("../Controllers/getUserbyUserId.js");
const updateUsers_js_1 = require("../Controllers/updateUsers.js");
const deleteUser_js_1 = require("../Controllers/deleteUser.js");
// AUTHENTICATION AND AUTHORIZATION
const { checkToken, checkAccount } = require("../Auth/Validation.js");
// LOGIN
router.post("/login", login_js_1.login);
// CREATE NEW USER
router.post("/", createUser_js_1.createUser);
// GET USER BY ID
router.get("/:id", checkToken, getUserbyUserId_js_1.getUserbyUserId);
// GET ALL USERS DATA
router.get("/", checkToken, getUsers_js_1.getallUsers);
// UPDATE USER DATA
router.put("/", checkToken, checkAccount, updateUsers_js_1.updateUsers);
// DELETE USER
router.delete("/:id", checkToken, checkAccount, deleteUser_js_1.deleteuser);
module.exports = router;
