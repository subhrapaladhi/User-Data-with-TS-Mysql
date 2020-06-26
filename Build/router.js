"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const dbcontroller_1 = require("./Controllers/dbcontroller");
const Validation_js_1 = require("./Auth/Validation.js");
const router = express_1.default.Router();
// LOGIN
router.post("/login", dbcontroller_1.login);
// CREATE NEW USER
router.post("/", dbcontroller_1.createUser);
// GET USER BY ID
router.get("/:id", Validation_js_1.checkToken, dbcontroller_1.getUserbyUserId);
// GET ALL USERS DATA
router.get("/", Validation_js_1.checkToken, dbcontroller_1.getUsers);
// UPDATE USER DATA
router.put("/", Validation_js_1.checkToken, Validation_js_1.checkAccount, dbcontroller_1.updateUsers);
// DELETE USER
router.delete("/:id", Validation_js_1.checkToken, Validation_js_1.checkAccount, dbcontroller_1.deleteUser);
module.exports = router;
