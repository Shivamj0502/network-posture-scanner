import { getScanResults } from "../services/scanService.js";
import { runCISChecks } from "../services/analysisService.js";

export const getCISResults = (req, res) => {
  const devices = getScanResults();
  const results = runCISChecks(devices);

  res.json(results);
};