import socket

# Scan a single port
def scan_port(ip, port):
    try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(0.3)  # faster scan

        result = sock.connect_ex((ip, port))
        sock.close()

        return result == 0
    except:
        return False


# Map ports to services
def get_service(port):
    common_services = {
        22: "SSH",
        23: "Telnet",
        80: "HTTP",
        443: "HTTPS",
        21: "FTP",
        25: "SMTP",
        3306: "MySQL",
        5432: "PostgreSQL",
        8080: "HTTP-Alt",
        3000: "Dev Server",
        5000: "Flask App"
    }

    return common_services.get(port, "Unknown")


# Get hostname
def get_hostname(ip):
    try:
        # Special case for localhost
        if ip == "127.0.0.1":
            return "localhost"

        hostname = socket.gethostbyaddr(ip)[0]

        # Extra safety: avoid nonsense mappings
        if hostname == ip:
            return "Unknown"

        return hostname

    except:
        return "Unknown"