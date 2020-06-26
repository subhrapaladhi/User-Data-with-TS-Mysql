// IMPORTING ENV VARIABLES
import dotenv from "dotenv";
dotenv.config();

// IMPORT EXPRESS
import express from "express";
const app: express.Application = express();

app.use(express.json())

// IMPORT ROUTER
import createrouter from "./Routes/router.js";

// CALLING ROUTER
app.use("/api/users", createrouter);

// SERVER HOSTING SECTION
const PORT: string|number = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server stared at port ${PORT}`));