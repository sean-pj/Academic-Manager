import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "http://127.0.0.1:8000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
});

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
    console.log("invalid credentials", err);
    alert("Invalid username or password. Try again.");
  }
}

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('refresh_token');

  console.log("logout successfull")
}

export const get = async (endpoint) => {
  try {

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
    try {
      // If the current access token is expired, attempt to refresh
      if (error.response && error.response.status === 401) {
        console.log('Access token expired. Refreshing token');
        
        const newToken = await refreshAuthToken();
          api.defaults.headers['Authorization'] = `Bearer ${newToken}`;

          const response = await api.get(endpoint);
          return await response.data;
      }
    } catch(refresh_error) {
      console.log("No refresh token available")
      return []
    }

    console.error('API call failed');
    throw error;
  }
};

export default api
