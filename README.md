# Network Posture Scanner

A lightweight network posture and security assessment tool built to discover devices, detect exposed services, analyze firewall configurations, run CIS-style benchmark checks, and upload findings to AWS.

The project simulates how organizations monitor network exposure and identify common security risks inside internal environments.

---

# Features

## Device Discovery
- Scan a subnet or list of IP addresses
- Detect reachable hosts
- Perform lightweight TCP port scanning
- Resolve hostnames when possible

## Service Detection
Detects commonly exposed services such as:
- SSH
- Telnet
- HTTP / HTTPS
- FTP
- MySQL
- PostgreSQL

## Firewall Analysis
- Reads firewall configuration from a sample JSON file
- Displays firewall rules in a readable format

## CIS-Style Security Checks
Implemented checks include:
- Telnet exposure detection
- FTP exposure detection
- HTTP without HTTPS
- Public database exposure
- Excessive open ports detection

Each device is marked as:
- SAFE
- DANGER

## AWS Integration
- Uploads scan findings to AWS DynamoDB
- Uses IAM-based authentication
- Backend securely communicates with AWS

---

# Tech Stack

## Scanner
- Python
- Socket Programming

## Backend
- Node.js
- Express.js

## Frontend
- React
- Vite
- Tailwind CSS

## Cloud
- AWS DynamoDB
- AWS IAM

---

# Architecture Flow

```text id="l9k3wt"
Python Scanner
      ↓
scan-results.json
      ↓
Node.js Backend APIs
      ↓
AWS DynamoDB
      ↓
React Frontend Dashboard

---

# REST APIs

## Get Devices
GET /devices

## Upload Devices To AWS
POST /upload-devices

## Get Firewall Rules
GET /firewall-rules

## Get CIS Results
GET /cis-results

---

Frontend Dashboard

The dashboard displays:

1. Discovered devices
2. Open ports and services
3. Firewall rules
4. CIS benchmark results
5. Device risk summary


# PROJECT STRUCTURE

network-posture-scanner/
│
├── scanner/
├── backend/
├── frontend/
├── configs/
├── docs/
└── README.md


---

# INSTALLATION

## Clone Repository

git clone <https://github.com/Shivamj0502/network-posture-scanner>
cd network-posture-scanner

## Scanner Setup

cd scanner
pip install -r requirements.txt
python scanner.py

## Backend Setup

cd backend
npm install
node server.js

## Backend runs on:

http://localhost:3000


## Frontend Setup

cd frontend
npm install
npm run dev

## Frontend runs on:

http://localhost:5173

---

# DESIGN DECISIONS

## Lightweight TCP scanning for simplicity and speed
## Modular backend architecture using controllers/services/routes
## JSON storage for fast MVP development and debugging
## Backend-mediated AWS access for better security

---

# FUTURE IMPROVEMENTS

## CIDR subnet scanning
## Real-time scan triggering
## Scheduled scans
## Docker support
## Authentication & authorization
## PDF / CSV report exporting

---

Author
Shivam