export default function DeviceTable({ devices }) {
  return (
    <div className="bg-gray-900 p-4 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-3 text-white">Devices</h2>

      <table className="w-full text-left text-sm text-gray-300">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="py-2">IP</th>
            <th className="py-2">Ports (Services)</th>
          </tr>
        </thead>
        <tbody>
          {devices.length === 0 ? (
            <tr>
              <td colSpan="2" className="text-center py-4 text-gray-500">
                No devices found
              </td>
            </tr>
          ) : (
            devices.map((d, i) => (
              <tr key={i} className="border-b border-gray-800 hover:bg-gray-800/50">
                <td className="py-2 font-mono">{d.ip}</td>
                <td className="py-2">
                  {d.open_ports
                    .map((p) => `${p.port} (${p.service})`)
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