export default function DeviceTable({ devices }) {
  return (
    <div className="bg-gray-900 p-5 rounded-2xl shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-4 text-cyan-400">
        Discovered Devices
      </h2>

      <table className="w-full text-left text-sm text-gray-300">
        <thead>
          <tr className="border-b border-gray-700 text-gray-400">
            <th className="py-3">IP Address</th>
            <th className="py-3">Hostname</th>
            <th className="py-3">Open Ports</th>
            <th className="py-3">Services</th>
          </tr>
        </thead>

        <tbody>
          {devices.length === 0 ? (
            <tr>
              <td
                colSpan="4"
                className="text-center py-6 text-gray-500"
              >
                No devices found
              </td>
            </tr>
          ) : (
            devices.map((device, i) => (
              <tr
                key={i}
                className="border-b border-gray-800 hover:bg-gray-800/40"
              >
                <td className="py-3 font-mono">
                  {device.ip}
                </td>

                <td className="py-3">
                  {device.hostname}
                </td>

                <td className="py-3">
                  {device.open_ports
                    .map((p) => p.port)
                    .join(", ")}
                </td>

                <td className="py-3">
                  {device.open_ports
                    .map((p) => p.service)
                    .join(", ")}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}