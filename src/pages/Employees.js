import { useEffect, useState } from "react";
import { getEmployees } from "../services/api";

export default function Employees(){

  const [employees,setEmployees] = useState([]);

  useEffect(()=>{
    getEmployees().then(res=>setEmployees(res.data));
  },[]);

  return(

    <div className="p-6">

      <h2 className="text-2xl font-bold mb-6">
        Employees
      </h2>

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

          {employees.map(emp=>(
            <tr key={emp.id} className="text-center border-b hover:bg-gray-100">

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