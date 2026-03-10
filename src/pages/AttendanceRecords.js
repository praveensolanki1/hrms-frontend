import { useState } from "react";
import { getAttendance } from "../services/api";

export default function AttendanceRecords(){

  const [employeeId,setEmployeeId] = useState("");
  const [records,setRecords] = useState([]);

  const fetchAttendance = async ()=>{

    if(!employeeId){
      alert("Enter employee ID");
      return;
    }

    const res = await getAttendance(employeeId);

    setRecords(res.data);
  };

  return(

    <div className="p-6">

      <h2 className="text-2xl font-bold mb-6">
        Attendance Records
      </h2>

      <div className="flex gap-3 mb-6">

        <input
        placeholder="Employee ID"
        className="border p-2 rounded"
        onChange={(e)=>setEmployeeId(e.target.value)}
        />

        <button
        onClick={fetchAttendance}
        className="bg-blue-600 text-white px-4 py-2 rounded"
        >
        Search
        </button>

      </div>

      <div className="overflow-x-auto">

      <table className="min-w-full bg-white shadow rounded">

        <thead className="bg-blue-600 text-white">

          <tr>
            <th className="p-3">Date</th>
            <th className="p-3">Status</th>
          </tr>

        </thead>

        <tbody>

          {records.map((rec,index)=>(
            <tr key={index} className="text-center border-b">

              <td className="p-3">{rec.date}</td>
              <td className="p-3">{rec.status}</td>

            </tr>
          ))}

        </tbody>

      </table>

      </div>

    </div>
  );
}