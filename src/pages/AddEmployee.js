import { useState } from "react";
import { addEmployee } from "../services/api";

export default function AddEmployee() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "HR" 
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

const submit = async (e) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.department) {
    setError("All fields are required.");
    return;
  }

  try {
    await addEmployee(form); 
    alert("Employee Added Successfully!");
    setForm({ name: "", email: "", department: "HR" });
    setError("");
  } catch (err) {
    console.log(err.response.data);
    setError(
      err.response?.data?.email
        ? `Email Error: ${err.response.data.email}`
        : "Failed to add employee."
    );
  }
};

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-xl font-bold mb-6 text-center">Add Employee</h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={submit} className="space-y-4">
          <input
            name="name"
            value={form.name}
            placeholder="Employee Name"
            className="border p-2 w-full rounded"
            onChange={handleChange}
          />

          <input
            name="email"
            value={form.email}
            placeholder="Email"
            className="border p-2 w-full rounded"
            onChange={handleChange}
          />

          <select
            name="department"
            value={form.department}
            className="border p-2 w-full rounded"
            onChange={handleChange}
          >
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