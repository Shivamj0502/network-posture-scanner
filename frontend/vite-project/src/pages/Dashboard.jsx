import { useEffect, useState } from "react";
import { fetchDevices, fetchCIS, fetchFirewall } from "../services/api";
import DeviceTable from "../components/DeviceTable";
import CISTable from "../components/CISTable";
import FirewallTable from "../components/FirewallTable";

export default function Dashboard() {
  const [devices, setDevices] = useState([]);
  const [cis, setCIS] = useState([]);
  const [firewall, setFirewall] = useState([]);

  useEffect(() => {
    fetchDevices().then(setDevices);
    fetchCIS().then(setCIS);
    fetchFirewall().then(setFirewall);
  }, []);

  // 🔥 Summary stats
  const total = devices.length;
  const danger = cis.filter(c => c.status === "DANGER").length;
  const safe = total - danger;

  return (
    <div className="min-h-screen bg-black text-white p-6">
      
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">
        Network Posture Dashboard
      </h1>

      {/* 🔥 Scan Button (UI only for now) */}
      <button className="bg-blue-600 px-4 py-2 rounded mb-6 hover:bg-blue-700">
        Scan Network
      </button>

      {/* 🔥 Summary Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-900 p-4 rounded-xl">
          <p>Total Devices</p>
          <h2 className="text-2xl font-bold">{total}</h2>
        </div>

        <div className="bg-red-900 p-4 rounded-xl">
          <p>Danger</p>
          <h2 className="text-2xl font-bold">{danger}</h2>
        </div>

        <div className="bg-green-900 p-4 rounded-xl">
          <p>Safe</p>
          <h2 className="text-2xl font-bold">{safe}</h2>
        </div>
      </div>

      {/* Tables */}
      <DeviceTable devices={devices} />
      <CISTable cis={cis} />
      <FirewallTable rules={firewall} />
    </div>
  );
}