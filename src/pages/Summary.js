import { useState } from "react";
import API from "../api/api";

function Summary(){

  const [employeeId,setEmployeeId] = useState("");
  const [data,setData] = useState(null);

  const getSummary = async ()=>{

    const res = await API.get(`/attendance/summary/${employeeId}`);

    setData(res.data);
  };

  return(

    <div>

      <h2 className="text-2xl font-semibold mb-6">
        Attendance Summary
      </h2>

      <div className="bg-white p-6 shadow rounded max-w-md">

        <input
          className="border p-2 w-full mb-4"
          placeholder="Employee ID"
          value={employeeId}
          onChange={(e)=>setEmployeeId(e.target.value)}
        />

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={getSummary}
        >
          Get Summary
        </button>

        {data && (

          <div className="mt-4">

            <p>Present : {data.present}</p>
            <p>Absent : {data.absent}</p>

          </div>

        )}

      </div>

    </div>

  );
}

export default Summary;