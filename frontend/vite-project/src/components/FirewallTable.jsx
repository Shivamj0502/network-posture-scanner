export default function FirewallTable({ rules }) {
  return (
    <div className="bg-gray-900 p-5 rounded-2xl shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-4 text-purple-400">
        Firewall Rules
      </h2>

      <table className="w-full text-sm text-gray-300">
        <thead>
          <tr className="border-b border-gray-700 text-gray-400">
            <th className="py-3">Source</th>
            <th className="py-3">Destination</th>
            <th className="py-3">Port</th>
            <th className="py-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {rules.map((r, i) => (
            <tr
              key={i}
              className="border-b border-gray-800 hover:bg-gray-800/40"
            >
              <td className="py-3">{r.source}</td>

              <td className="py-3">{r.destination}</td>

              <td className="py-3">{r.port}</td>

              <td
                className={`py-3 font-bold ${
                  r.action === "ALLOW"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
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