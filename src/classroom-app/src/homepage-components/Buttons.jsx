// src/components/ButtonGroup.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ButtonGroup() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="flex gap-4 mt-4">
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
  );
}

export default ButtonGroup;
