import { getFirewallRules } from "../services/firewallService.js";

export const getFirewall = (req, res) => {
  const rules = getFirewallRules();
  res.json(rules);
};