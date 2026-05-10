export default function CISTable({ cis }) {
  return (
    <div className="bg-gray-900 p-5 rounded-2xl shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-4 text-yellow-400">
        CIS Benchmark Results
      </h2>

      <table className="w-full text-sm text-gray-300">
        <thead>
          <tr className="border-b border-gray-700 text-gray-400">
            <th className="py-3">IP</th>
            <th className="py-3">Status</th>
            <th className="py-3">Issues</th>
          </tr>
        </thead>

        <tbody>
          {cis.map((c, i) => (
            <tr
              key={i}
              className={`border-b border-gray-800 ${
                c.status === "DANGER"
                  ? "bg-red-950/30"
                  : "bg-green-950/10"
              }`}
            >
              <td className="py-3 font-mono">
                {c.ip}
              </td>

              <td
                className={`py-3 font-bold ${
                  c.status === "DANGER"
                    ? "text-red-400"
                    : "text-green-400"
                }`}
              >
                {c.status}
              </td>

              <td className="py-3">
                {c.issues.length > 0
                  ? c.issues.join(", ")
                  : "No issues found"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}