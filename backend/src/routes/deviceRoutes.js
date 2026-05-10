import express from "express";

import {
  getDevices,
  uploadDevices
} from "../controllers/deviceController.js";

const router = express.Router();

router.get("/devices", getDevices);

router.post("/upload-devices", uploadDevices);

export default router;