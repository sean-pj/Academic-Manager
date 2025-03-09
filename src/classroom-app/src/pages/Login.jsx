import React, { useState } from 'react';
import api from "../services/api.js"
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/token/", {
        username: usernameOrEmail,
        password: password,
      });
      
      localStorage.setItem("token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
      
    } catch (err) {
      console.log("invalid credentials")
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-80">
        <h2 className="text-center text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="usernameOrEmail" className="block text-gray-700">Username or Email</label>
            <input
              type="text"
              id="usernameOrEmail"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-gray-700">Don't have an account? </span>
          <a
            href="#"
            className="text-green-600 hover:text-green-700"
            onClick={() => navigate('/signup')}
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;