# Network Posture Scanner

A lightweight network posture and security assessment tool built to discover devices, identify exposed services, analyze firewall configurations, and run basic CIS-style security checks.

The project is divided into three main parts:

- Python-based network scanner
- Node.js backend APIs
- Frontend dashboard for visualization

The goal of this project is to simulate how organizations can monitor exposed network services and detect common security risks inside a network environment.

---

# Features

## Device Discovery
- Scans a subnet or list of IP addresses
- Detects reachable hosts
- Performs lightweight TCP port scanning
- Resolves hostnames when possible

## Service Detection
Detects commonly used services such as:
- SSH
- Telnet
- HTTP / HTTPS
- FTP
- MySQL
- PostgreSQL
- Flask / Development servers

## Firewall Configuration Parsing
- Reads firewall configuration from a sample JSON file
- Displays firewall rules in a readable format

## CIS-Style Security Checks
Implemented benchmark checks include:

- Telnet exposure detection
- FTP exposure detection
- HTTP exposed without HTTPS
- Public database port exposure
- Excessive open ports detection

Each device is marked as:
- SAFE
- DANGER

based on detected security issues.

## REST APIs
Backend APIs available:

- `/devices`
- `/firewall-rules`
- `/cis-results`

## Frontend Dashboard
The frontend dashboard displays:
- Discovered devices
- Open ports and services
- Firewall rules
- CIS benchmark results

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

---

# Project Structure

```bash
network-posture-scanner/
│
├── scanner/
├── backend/
├── frontend/
├── configs/
├── docs/
└── README.md
```

# How the Project Works

## Step 1: Network Scanning

The Python scanner performs TCP-based port scanning on target IP addresses and identifies open services.

The scan results are stored locally in:

backend/src/data/scan-results.json

## Step 2: Security Analysis

The backend reads scan results and runs CIS-style security checks against discovered devices.

## Step 3: API Layer

Express APIs expose:

discovered devices
firewall rules
benchmark results

## Step 4: Frontend Dashboard

The frontend fetches data from backend APIs and displays it in a readable dashboard.


# AWS Architecture (Planned Extension)

The project was designed in a modular way so cloud integration can be added easily.

## Planned AWS flow:

Scanner → API Gateway → AWS Lambda → DynamoDB / S3

Current MVP stores scan results locally in JSON format for faster development and easier testing.

## Future improvements may include:

1. Secure cloud ingestion
2. DynamoDB storage
3. Real-time scan uploads
4. Authentication using API keys
5. Scheduled scans using AWS Lambda


# Installation

## Clone the Repository
git clone <your-github-link>
cd network-posture-scanner

## Scanner Setup
cd scanner
pip install -r requirements.txt
python scanner.py

## Backend Setup
cd backend
npm install
npm start

Backend runs on:

http://localhost:3000

## Frontend Setup
cd frontend
npm install
npm run dev

## Sample API Endpoints
### Get Devices
GET /devices

### Get Firewall Rules
GET /firewall-rules

### Get CIS Results
GET /cis-results

# Design Decisions
1. Lightweight TCP scanning was used to keep the scanner fast and simple.
2. JSON storage was used for MVP speed and easier debugging.
3. Services and controllers were separated to maintain modular backend architecture.
4. Common ports were prioritized to focus on realistic security exposure scenarios.

# Future Improvements
1. Real AWS integration
2. Scheduled automated scans
3. Docker support
4. Authentication and authorization
5. Advanced service fingerprinting
6. CIDR subnet scanning
7. Export reports in PDF/CSV format


# Author

Shivam