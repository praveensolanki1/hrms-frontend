import axios from "axios";

const API = axios.create({
  baseURL: "https://hrms-backend-q1re.onrender.com"
});

export default API;