import { createUser } from "./Controllers/dbcontroller";
import express from "express";
const router = express.Router();

router.post("/", createUser);

export = router;