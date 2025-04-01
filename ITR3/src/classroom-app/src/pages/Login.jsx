import React, { useEffect, useState } from 'react';
import api, { login, get } from "../services/api.js"
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    await login(username, password);

    const getData = async () => {
      const result = await get("/users/");
      setUser(result[0]);
      const userData = result[0];

      if (userData?.student != null) {
        navigate("/student");
      } else if (userData?.teacher != null) {
        navigate("/teacher");
      }
    };
    getData()

  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-80">
        <h2 className="text-center text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <span className="text-gray-700">Don't have an account? Register as a </span>
          <br></br>
          <a
            href="#"
            className="text-green-600 hover:text-green-700"
            onClick={() => navigate('/student-signup')}
          >
            Student
          </a>
          <span> or </span> 
          <a
            href="#"
            className="text-green-600 hover:text-green-700"
            onClick={() => navigate('/teacher-signup')}
          >
            Teacher
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;