import express from "express";
import { info } from "../../controllers/index.js";
const router=express.Router();
console.log("info route");
router.get("/info",info)

export default router;