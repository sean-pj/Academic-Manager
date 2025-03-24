import axios from "axios";
import stubData from "./stubData";
import { useNavigate } from "react-router-dom";

const USE_STUB_DATA = false; // Set to false to use real API
const API_BASE_URL = "http://127.0.0.1:8000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
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

const refreshAuthToken = async () => {
  const refreshToken = localStorage.getItem('refresh_token')
  
  if (!refreshToken) {
    throw new Error('No refresh token available');
  }

  try {
    const response = await api.post("/token/refresh/", {
      refresh: refreshToken
    })

    // Store the new access and refresh tokens in localStorage
    localStorage.setItem('token', response.data.access);
    //If you turn refresh token rotation on in django, this needs to be uncommented
    //localStorage.setItem('refresh_token', response.data.refresh);

    return response.data.access;  // Return the new access token
  } catch (error) {
    console.error('Token refresh failed', error);
    throw error;
  }
};

export const login = async (user, password) => {
  try {
    const response = await api.post("/token/", {
      username: user,
      password: password,
    });
    
    localStorage.setItem("token", response.data.access);
    localStorage.setItem("refresh_token", response.data.refresh);
    
  } catch (err) {
    console.log("invalid credentials", err)
  }
}

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('refresh_token');

  console.log("logout successfull")
}

export const get = async (endpoint) => {
  try {
    if (USE_STUB_DATA) {
      return await mockApiRequest(endpoint);
    }

    //Get Token
    const token = localStorage.getItem('token')

    //Apply token if it exists
    if (token) {
      api.defaults.headers['Authorization'] = `Bearer ${token}`;
    } else {
      delete api.defaults.headers['Authorization'];
    }

    //GET api response
    const response = await api.get(endpoint);
    return await response.data;

  } catch (error) {

    // If the current access token is expired, attempt to refresh
    if (error.response && error.response.status === 401) {
      console.log('Access token expired. Refreshing token');
      
      const newToken = await refreshAuthToken();
        api.defaults.headers['Authorization'] = `Bearer ${newToken}`;

        const response = await api.get(endpoint);
        return await response.data;
    }

    console.error('API call failed');
    throw error;
  }
};

export default api
