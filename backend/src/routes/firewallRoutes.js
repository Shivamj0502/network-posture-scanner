import express from "express";
import { getFirewall } from "../controllers/firewallController.js";

const router = express.Router();

router.get("/firewall-rules", getFirewall);

export default router;