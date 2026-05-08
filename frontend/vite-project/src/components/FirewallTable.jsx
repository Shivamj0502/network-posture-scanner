export default function FirewallTable({ rules }) {
  return (
    <div className="bg-gray-900 p-4 rounded-xl shadow mt-6">
      <h2 className="text-xl font-bold mb-3 text-white">Firewall Rules</h2>

      <table className="w-full text-sm text-gray-300">
        <thead>
          <tr className="border-b border-gray-700">
            <th>Source</th>
            <th>Destination</th>
            <th>Port</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rules.map((r, i) => (
            <tr key={i} className="border-b border-gray-800">
              <td>{r.source}</td>
              <td>{r.destination}</td>
              <td>{r.port}</td>
              <td
                className={
                  r.action === "ALLOW"
                    ? "text-green-400 font-bold"
                    : "text-red-400 font-bold"
                }
              >
                {r.action}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}