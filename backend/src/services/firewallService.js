import fs from "fs";
import path from "path";

const filePath = path.resolve("../configs/sample-firewall.json");

export const getFirewallRules = () => {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading firewall config:", err);
    return [];
  }
};