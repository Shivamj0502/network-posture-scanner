import { useEffect, useState } from "react";

import {
  fetchDevices,
  fetchCIS,
  fetchFirewall,
  uploadDevicesToAWS
} from "../services/api";

import DeviceTable from "../components/DeviceTable";
import CISTable from "../components/CISTable";
import FirewallTable from "../components/FirewallTable";

export default function Dashboard() {

  const [devices, setDevices] = useState([]);
  const [cis, setCIS] = useState([]);
  const [firewall, setFirewall] = useState([]);

  const [uploadMessage, setUploadMessage] =
    useState("");

  useEffect(() => {

    fetchDevices().then(setDevices);
    fetchCIS().then(setCIS);
    fetchFirewall().then(setFirewall);

  }, []);

  const totalDevices = devices.length;

  const dangerDevices =
    cis.filter(c => c.status === "DANGER").length;

  const safeDevices =
    totalDevices - dangerDevices;


  const handleUpload = async () => {

    try {

      const res =
        await uploadDevicesToAWS();

      setUploadMessage(res.message);

    } catch (err) {

      setUploadMessage("Upload failed");
    }
  };


  return (

    <div className="min-h-screen bg-black text-white p-6">

      {/* Header */}
      <div className="
        flex
        justify-between
        items-center
        mb-10
      ">

        <div>

          <h1 className="text-5xl font-bold text-cyan-400">
            Network Posture Scanner
          </h1>

          <p className="text-gray-400 mt-3 text-lg">
            Real-time device discovery,
            firewall analysis,
            and CIS benchmark validation
          </p>

        </div>

        <button
          onClick={handleUpload}
          className="
            bg-cyan-600
            hover:bg-cyan-700
            px-5
            py-3
            rounded-xl
            font-semibold
            transition
          "
        >
          Upload To AWS
        </button>

      </div>

      {/* Upload message */}
      {uploadMessage && (

        <div className="
          bg-green-900
          text-green-300
          px-4
          py-3
          rounded-xl
          mb-6
        ">
          {uploadMessage}
        </div>

      )}

      {/* Stats */}
      <div className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-5
        mb-8
      ">

        <div className="
          bg-gradient-to-br
          from-gray-900
          to-blue-950
          p-6
          rounded-2xl
          shadow-lg
        ">

          <p className="text-gray-400">
            Total Devices
          </p>

          <h2 className="
            text-5xl
            font-bold
            text-cyan-400
            mt-3
          ">
            {totalDevices}
          </h2>

        </div>

        <div className="
          bg-gradient-to-br
          from-red-950
          to-red-900
          p-6
          rounded-2xl
          shadow-lg
        ">

          <p className="text-red-200">
            Dangerous Devices
          </p>

          <h2 className="
            text-5xl
            font-bold
            text-red-400
            mt-3
          ">
            {dangerDevices}
          </h2>

        </div>

        <div className="
          bg-gradient-to-br
          from-green-950
          to-green-900
          p-6
          rounded-2xl
          shadow-lg
        ">

          <p className="text-green-200">
            Safe Devices
          </p>

          <h2 className="
            text-5xl
            font-bold
            text-green-400
            mt-3
          ">
            {safeDevices}
          </h2>

        </div>

      </div>

      {/* Tables */}
      <DeviceTable devices={devices} />

      <CISTable cis={cis} />

      <FirewallTable rules={firewall} />

    </div>
  );
}