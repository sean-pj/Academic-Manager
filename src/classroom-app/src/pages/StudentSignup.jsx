import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from "../services/api.js";

function StudentSignup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [birthdayMonth, setBirthdayMonth] = useState('');
  const [birthdayDay, setBirthdayDay] = useState('');
  const [birthdayYear, setBirthdayYear] = useState('');
  const [grade, setGrade] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/users/", {
        username: username,
        password: password,
        email: email,
        first_name: firstname,
        last_name: lastname,
        birthday: `${birthdayYear}-${birthdayMonth}-${birthdayDay}`,
        grade: grade,
        role: 'student'
      })
      console.log(response)
      navigate("/login")
    } catch (err) {
      console.log(err)
    }
  };

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
  const grades = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 overflow-y-auto">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-center text-2xl font-bold mb-6">Student Signup</h2>
        <form onSubmit={handleSignup}>
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
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="firstname" className="block text-gray-700">First Name</label>
            <input
              type="text"
              id="firstname"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="lastname" className="block text-gray-700">Last Name</label>
            <input
              type="text"
              id="lastname"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="birthday" className="block text-gray-700">Birthday</label>
            <div className="flex space-x-2">
              <select
                id="birthdayMonth"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
                value={birthdayMonth}
                onChange={(e) => setBirthdayMonth(e.target.value)}
                required
              >
                <option value="">Month</option>
                {months.map((month, idx) => (
                  <option key={idx} value={idx}>{month}</option>
                ))}
              </select>
              <select
                id="birthdayDay"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
                value={birthdayDay}
                onChange={(e) => setBirthdayDay(e.target.value)}
                required
              >
                <option value="">Day</option>
                {days.map((day) => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
              <select
                id="birthdayYear"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
                value={birthdayYear}
                onChange={(e) => setBirthdayYear(e.target.value)}
                required
              >
                <option value="">Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="grade" className="block text-gray-700">Grade</label>
            <select
              id="grade"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              required
            >
              <option value="">Select Grade</option>
              {grades.map((grade) => (
                <option key={grade} value={grade}>{grade}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Signup
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-gray-700">Have an account? </span>
          <a
            href="#"
            className="text-green-600 hover:text-green-700 block"
            onClick={() => navigate("/login")}
          >
            Click here to sign in.
          </a>
        </div>
      </div>
    </div>
  );
}

export default StudentSignup;


