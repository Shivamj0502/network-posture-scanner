import json
import os
from utils import scan_port, get_service, get_hostname

# ---------- PATH FIX ----------
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

output_path = os.path.join(
    BASE_DIR,
    "..",
    "backend",
    "src",
    "data",
    "scan-results.json"
)

# Ensure folder exists
os.makedirs(os.path.dirname(output_path), exist_ok=True)

# ---------- TARGET IPS ----------
ips = ["127.0.0.1", "192.168.0.7"]

base_ip = "192.168.0."
for i in range(1, 10):
    ips.append(base_ip + str(i))

# Remove duplicates
ips = list(set(ips))

ports_to_scan = [21, 22, 23, 80, 443, 8080, 3000, 5000, 3306]

results = []

# ---------- SCANNING ----------
for ip in ips:
    print(f"Scanning {ip}...")

    open_ports = []

    try:
        for port in ports_to_scan:
            if scan_port(ip, port):
                open_ports.append({
                    "port": port,
                    "service": get_service(port)
                })

        # Only store hosts with open ports (current design choice)
        if len(open_ports) == 0:
            continue

        results.append({
            "ip": ip,
            "hostname": get_hostname(ip),
            "open_ports": open_ports,
            "is_telnet_open": any(p["port"] == 23 for p in open_ports)
        })

    except Exception as e:
        print(f"[ERROR] Failed scanning {ip}: {e}")
        continue

# ---------- SAVE ----------
try:
    with open(output_path, "w") as f:
        json.dump(results, f, indent=2)

    print(f"Scan complete. Results saved at: {output_path}")

except Exception as e:
    print(f"[ERROR] Failed to save results: {e}")