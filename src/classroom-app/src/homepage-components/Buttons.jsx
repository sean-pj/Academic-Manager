// src/components/ButtonGroup.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Buttons() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="flex gap-4 mt-4">
      <button
        className="px-20 py-3 bg-black text-white rounded-full hover:bg-green-600 transition"
        onClick={() => handleClick("/student-signup")}
      >
        Student 
      </button>
      <button
        className="px-20 py-3 bg-black text-white rounded-full hover:bg-green-600 transition"
        onClick={() => handleClick("/teacher-signup")}
      >
        Teacher
      </button>
    </div>
  );
}

export default Buttons;
