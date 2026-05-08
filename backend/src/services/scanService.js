import fs from "fs";
import path from "path";

const filePath = path.resolve("src/data/scan-results.json");

export const getScanResults = () => {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading scan results:", err);
    return [];
  }
};