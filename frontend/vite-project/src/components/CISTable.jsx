export default function CISTable({ cis }) {
  return (
    <div className="bg-gray-900 p-4 rounded-xl shadow mt-6">
      <h2 className="text-xl font-bold mb-3 text-white">CIS Results</h2>

      <table className="w-full text-sm text-gray-300">
        <thead>
          <tr className="border-b border-gray-700">
            <th>IP</th>
            <th>Status</th>
            <th>Issues</th>
          </tr>
        </thead>
        <tbody>
          {cis.map((c, i) => (
            <tr
              key={i}
              className={`border-b border-gray-800 ${
                c.status === "DANGER" ? "bg-red-950" : ""
              }`}
            >
              <td>{c.ip}</td>

              <td
                className={
                  c.status === "DANGER"
                    ? "text-red-400 font-bold"
                    : "text-green-400 font-bold"
                }
              >
                {c.status}
              </td>

              <td>{c.issues.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}