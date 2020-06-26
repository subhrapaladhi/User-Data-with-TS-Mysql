"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const dbcontroller_1 = require("./Controllers/dbcontroller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// CREATE NEW USER
router.post("/", dbcontroller_1.createUser);
// GET USER BY ID
router.get("/:id", dbcontroller_1.getUserbyUserId);
// GET ALL USERS DATA
router.get("/", dbcontroller_1.getUsers);
// UPDATE USER DATA
router.put("/", dbcontroller_1.updateUsers);
// DELETE USER
router.delete("/:id", dbcontroller_1.deleteUser);
module.exports = router;
