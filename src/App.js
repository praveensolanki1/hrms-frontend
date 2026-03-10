import { BrowserRouter, Routes, Route } from "react-router-dom";
import AttendanceRecords from "./pages/AttendanceRecords";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import AddEmployee from "./pages/AddEmployee";
import Attendance from "./pages/Attendance";

function App(){

  return(

    <BrowserRouter>

      <Navbar/>

      <Routes>

        <Route path="/" element={<Dashboard/>}/>
        <Route path="/employees" element={<Employees/>}/>
        <Route path="/add" element={<AddEmployee/>}/>
        <Route path="/attendance" element={<Attendance/>}/>
        <Route path="/attendance-records" element={<AttendanceRecords/>}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;