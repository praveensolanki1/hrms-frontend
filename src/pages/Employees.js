import { useEffect, useState } from "react";
import { getEmployees } from "../services/api";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);  

  useEffect(() => {
    getEmployees()
      .then((res) => {
        setEmployees(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching employees:", err);
        setError("Failed to load employees");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="p-6 text-center">Loading employees...</p>;
  }

  if (error) {
    return <p className="p-6 text-red-600 text-center">{error}</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Employees</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Department</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp) => (
              <tr
                key={emp.id}
                className="text-center border-b hover:bg-gray-100"
              >
                <td className="p-3">{emp.id}</td>
                <td className="p-3">{emp.name}</td>
                <td className="p-3">{emp.email}</td>
                <td className="p-3">{emp.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}