import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#FBBF24", "#EF4444"];

export default function Dashboard() {
  const [employeeData, setEmployeeData] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    // Fetch employees grouped by department
    axios.get("http://localhost:8000/employees/summary")
      .then(res => {
        setEmployeeData(res.data); 
        // Expected format: [{ name: "HR", employees: 10 }, ...]
      })
      .catch(err => console.log(err));

    // Fetch attendance summary
    axios.get("http://localhost:8000/attendance/summary")
      .then(res => {
        setAttendanceData(res.data); 
        // Expected format: [{ name: "Present", value: 70 }, ...]
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">HRMS Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Employees Bar Chart */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Employees by Department</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={employeeData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="employees" fill="#8884d8">
                {employeeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Attendance Pie Chart */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Attendance Summary</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={attendanceData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {attendanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}