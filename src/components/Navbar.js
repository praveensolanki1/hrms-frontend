import { Link } from "react-router-dom";

export default function Navbar(){

  return(

    <nav className="bg-blue-700 text-white px-6 py-3 flex justify-between items-center">

      <h1 className="text-lg font-bold">
        HRMS Dashboard
      </h1>

      <div className="space-x-6">

        <Link to="/">Dashboard</Link>
        <Link to="/employees">Employees</Link>
        <Link to="/add">Add Employee</Link>
        <Link to="/attendance">Attendance</Link>
        <Link to="/attendance-records">Attendance Records</Link>

      </div>

    </nav>

  );
}