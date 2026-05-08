import { getScanResults } from "../services/scanService.js";

export const getDevices = (req, res) => {
  const devices = getScanResults();
  res.json(devices);
};