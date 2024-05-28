import express from "express";
import { sendRev } from "../controller/userController.js";
import { takes } from "../controller/usertaker.js";
const router = express.Router();

router.post("/send", sendRev);
router.get("/take",takes);

export default router;
