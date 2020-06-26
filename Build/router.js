"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const dbcontroller_1 = require("./Controllers/dbcontroller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post("/", dbcontroller_1.createUser);
module.exports = router;
