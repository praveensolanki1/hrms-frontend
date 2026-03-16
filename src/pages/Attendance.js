import { useState } from "react";
import { markAttendance } from "../services/api";

export default function Attendance(){

  const [form,setForm] = useState({
    employee:"",
    status:"Present"
  });

  const handleChange=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    });
  };

const submit = async (e) => {
  e.preventDefault();

  try {

    await markAttendance(form);

    alert("Attendance Marked");

  } catch (error) {

    const data = error.response?.data;

    if(data?.employee){
      alert(data.employee);
    }
    else if(data?.attendance){
      alert(data.attendance);
    }
    else{
      alert("Something went wrong");
    }

  }
};

  return(

    <div className="flex justify-center mt-10">

      <div className="bg-white shadow-lg p-8 rounded w-full max-w-md">

        <h2 className="text-xl font-bold mb-6 text-center">
          Mark Attendance
        </h2>

        <form onSubmit={submit} className="space-y-4">

          <input
          name="employee"
          placeholder="Employee ID"
          className="border p-2 w-full rounded"
          onChange={handleChange}
          />

          <select
          name="status"
          className="border p-2 w-full rounded"
          onChange={handleChange}
          >

            <option value="Present">Present</option>
            <option value="Absent">Absent</option>

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