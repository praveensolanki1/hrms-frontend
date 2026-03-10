import { Link } from "react-router-dom";

function Sidebar() {

  return (

    <div className="w-full md:w-64 bg-blue-600 text-white p-6">

      <h2 className="text-2xl font-bold mb-6">
        HRMS
      </h2>

      <ul className="flex md:block space-x-6 md:space-x-0 md:space-y-4">

        <li>
          <Link to="/" className="hover:text-gray-200">
            Employees
          </Link>
        </li>

        <li>
          <Link to="/add" className="hover:text-gray-200">
            Add
          </Link>
        </li>

        <li>
          <Link to="/attendance" className="hover:text-gray-200">
            Attendance
          </Link>
        </li>

        <li>
          <Link to="/summary" className="hover:text-gray-200">
            Summary
          </Link>
        </li>

      </ul>

    </div>

  );
}

export default Sidebar;