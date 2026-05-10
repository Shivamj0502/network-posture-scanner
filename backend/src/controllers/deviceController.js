import { getScanResults } from "../services/scanService.js";

import {
  uploadDevicesToAWS
} from "../services/deviceUploadService.js";


// GET /devices
export const getDevices = (req, res) => {

  const devices = getScanResults();

  res.json(devices);
};


// POST /upload-devices
export const uploadDevices = async (req, res) => {

  const devices = getScanResults();

  try {

    await uploadDevicesToAWS(devices);

    res.json({
      message: "Devices uploaded successfully to AWS"
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      error: "AWS upload failed"
    });
  }
};