import { useEffect, useState } from "react";
import API from "../services/api";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#FBBF24", "#EF4444"];

export default function Dashboard() {

  const [employeeData, setEmployeeData] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {

    API.get("/employees/summary/")
      .then(res => {

        const formatted = res.data.map(emp => ({
          name: emp.name,
          employees: emp.total_present
        }));

        setEmployeeData(formatted);

      })
      .catch(err => console.log(err));


    API.get("/attendance/summary/")
      .then(res => {

        const formatted = res.data.map(item => ({
          name: item.employee__name,
          value: item.total_present
        }));

        setAttendanceData(formatted);

      })
      .catch(err => console.log(err));

  }, []);

  return (

    <div className="p-6">

      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        HRMS Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Bar Chart */}
        <div className="bg-white p-4 rounded shadow">

          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            Employees by Attendance
          </h3>

          <ResponsiveContainer width="100%" height={300}>

            <BarChart data={employeeData}>
              <XAxis dataKey="name"/>
              <YAxis/>
              <Tooltip/>
              <Legend/>

              <Bar dataKey="employees">

                {employeeData.map((entry,index)=>(
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}

              </Bar>

            </BarChart>

          </ResponsiveContainer>

        </div>


        <div className="bg-white p-4 rounded shadow">

          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            Attendance Summary
          </h3>

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

                {attendanceData.map((entry,index)=>(
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}

              </Pie>

              <Tooltip/>
              <Legend/>

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}