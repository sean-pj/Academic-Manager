import { useNavigate } from "react-router-dom";
import {useState, useEffect} from "react";

function App() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-green-500">greenbar</h1>
        <div className="flex flex-col gap-4">
          <button
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            onClick={() => handleClick("/student")}
          >
            Student Dashboard
          </button>
          <button
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            onClick={() => handleClick("/teacher")}
          >
            Teacher Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

