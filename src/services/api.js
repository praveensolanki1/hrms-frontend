import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000"
});

export const getEmployees = () => API.get("/employees/");
export const addEmployee = (data) => API.post("/employees/", data);

export const markAttendance = (data) => API.post("/attendance/", data);
export const getAttendance = (id) => API.get(`/attendance/${id}`);
export const getSummary = (id) => API.get(`/attendance/summary/${id}`);

export default API;