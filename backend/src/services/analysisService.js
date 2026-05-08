export const runCISChecks = (devices) => {
  const results = [];

  for (const device of devices) {
    let issues = [];

    const ports = device.open_ports.map(p => p.port);

    if (ports.includes(23)) {
      issues.push("Telnet (23) is insecure and exposed");
    }

    if (ports.includes(21)) {
      issues.push("FTP (21) is insecure and exposed");
    }

    if (ports.includes(80) && !ports.includes(443)) {
      issues.push("HTTP exposed without HTTPS (unencrypted traffic)");
    }

    if (ports.includes(3306)) {
      issues.push("MySQL port (3306) exposed - should not be public");
    }

    if (ports.includes(5432)) {
      issues.push("PostgreSQL port (5432) exposed - should not be public");
    }

    if (ports.length > 5) {
      issues.push("Too many open ports - increased attack surface");
    }


    results.push({
      ip: device.ip,
      hostname: device.hostname,
      status: issues.length > 0 ? "DANGER" : "SAFE",
      issues
    });
  }

  return results;
};