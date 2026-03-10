import { useState } from "react";
import { addEmployee } from "../services/api";

export default function AddEmployee() {

  const [form,setForm] = useState({
    name:"",
    email:"",
    department:""
  });

  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    });
  };

  const submit = async(e)=>{
    e.preventDefault();

    await addEmployee(form);

    alert("Employee Added");
  };

  return(

    <div className="flex justify-center mt-10">

      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">

        <h2 className="text-xl font-bold mb-6 text-center">
          Add Employee
        </h2>

        <form onSubmit={submit} className="space-y-4">

          <input
          name="name"
          placeholder="Employee Name"
          className="border p-2 w-full rounded"
          onChange={handleChange}
          />

          <input
          name="email"
          placeholder="Email"
          className="border p-2 w-full rounded"
          onChange={handleChange}
          />

          <select
          name="department"
          className="border p-2 w-full rounded"
          onChange={handleChange}
          >

            <option value="">Select Department</option>
            <option value="HR">HR</option>
            <option value="Engineering">Engineering</option>
            <option value="Finance">Finance</option>

          </select>

          <button
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
          >
          Add Employee
          </button>

        </form>

      </div>

    </div>
  );
}