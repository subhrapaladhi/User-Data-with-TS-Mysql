"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORTING ENV VARIABLES
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// IMPORT EXPRESS
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.use(express_1.default.json());
// IMPORT ROUTER
const router_js_1 = __importDefault(require("./Routes/router.js"));
// CALLING ROUTER
app.use("/api/users", router_js_1.default);
// SERVER HOSTING SECTION
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server stared at port ${PORT}`));
