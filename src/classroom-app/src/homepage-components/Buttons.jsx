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
        className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-green-600 transition"
        onClick={() => handleClick("/student")}
      >
        Student 
      </button>
      <button
        className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-green-600 transition"
        onClick={() => handleClick("/teacher")}
      >
        Teacher
      </button>
    </div>
  );
}

export default ButtonGroup;
