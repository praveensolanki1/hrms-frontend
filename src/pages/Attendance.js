import { useState } from "react";
import { markAttendance } from "../services/api";

export default function Attendance(){

  const [form,setForm] = useState({
    employee_id:"",
    status:"present",
    date:""
  });

  const handleChange=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    });
  };

  const submit = async(e)=>{

    e.preventDefault();

    await markAttendance(form);

    alert("Attendance Marked");
  };

  return(

    <div className="flex justify-center mt-10">

      <div className="bg-white shadow-lg p-8 rounded w-full max-w-md">

        <h2 className="text-xl font-bold mb-6 text-center">
          Mark Attendance
        </h2>

        <form onSubmit={submit} className="space-y-4">

          <input
          name="employee_id"
          placeholder="Employee ID"
          className="border p-2 w-full rounded"
          onChange={handleChange}
          />

          <input
          type="date"
          name="date"
          className="border p-2 w-full rounded"
          onChange={handleChange}
          />

          <select
          name="status"
          className="border p-2 w-full rounded"
          onChange={handleChange}
          >

            <option value="present">Present</option>
            <option value="absent">Absent</option>

          </select>

          <button
          className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
          >
          Submit
          </button>

        </form>

      </div>

    </div>
  );
}