import express from "express";
import { getCISResults } from "../controllers/cisController.js";

const router = express.Router();

router.get("/cis-results", getCISResults);

export default router;