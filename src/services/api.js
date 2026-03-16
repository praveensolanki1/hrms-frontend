import axios from "axios";

const API = axios.create({
   baseURL: process.env.REACT_APP_API_URL
});

export const getEmployees = () => API.get("/employees/");
export const addEmployee = (data) => API.post("/employees/", data);

export const markAttendance = (data) => API.post("/attendance/", data);

export const getAttendance = (employeeId) =>
  API.get(`/attendance/employee/${employeeId}/`);

export const getSummary = () =>
  API.get("/attendance/summary/");

export const getEmployeeSummary = () =>
  API.get("/employees/summary/");

export default API;
