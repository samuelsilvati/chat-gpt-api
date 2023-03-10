import express from "express";
import * as prompController from "../controllers/prompt-controller.js";

const router = express.Router();

router.post("/api/prompt", prompController.sendMessage);

export default router;
