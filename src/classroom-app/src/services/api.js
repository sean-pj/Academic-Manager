import axios from "axios";
import stubData from "./stubData";

const USE_STUB_DATA = false; // Set to false to use real API
const API_BASE_URL = "http://127.0.0.1:8000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const mockApiRequest = (endpoint) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Remove leading/trailing slashes from endpoint input
      // e.g., "/students/" => "students"
      const cleanEndpoint = endpoint.replace(/^\/|\/$/g, "");

      if (stubData[cleanEndpoint]) {
        resolve({ data: stubData[cleanEndpoint] });
      } else {
        resolve({ data: [], message: "No stub data found" });
      }
    }, 1000); // Simulated 1-second API fetch delay
  });
};

export const get = async (endpoint) => {
  try {
    if (USE_STUB_DATA) {
      return await mockApiRequest(endpoint);
    }

    const response = await api.get(endpoint);
    return await response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export default api;
