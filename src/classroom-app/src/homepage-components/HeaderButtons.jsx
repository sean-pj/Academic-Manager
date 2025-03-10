import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userIcon from '../assets/user.svg';
import userPlusIcon from '../assets/user-plus.svg';

function HeaderButtons() {
  const navigate = useNavigate();
  const [showSignupMenu, setShowSignupMenu] = useState(false);

  const handleClick = (path) => {
    navigate(path);
    setShowSignupMenu(false); // Close menu when navigating
  };

  return (
    <div className="relative flex space-x-4">
      <button className="text-black hover:text-green-600 bg-transparent border-none flex items-center gap-2">
        Home
      </button>
      <button className="text-black hover:text-green-600 bg-transparent border-none flex items-center gap-2">
        About
      </button>
      <button className="text-black hover:text-green-600 bg-transparent border-none flex items-center gap-2">
        Support
      </button>
      <button
        className="text-black hover:text-green-600 bg-transparent border-none flex items-center gap-2"
        onClick={() => handleClick("/login")}
      >
        <img src={userIcon} alt="Login" className="w-5 h-5" />
        Login
      </button>
      <button
        className="text-black hover:text-green-600 bg-transparent border-none flex items-center gap-2"
        onClick={() => setShowSignupMenu(!showSignupMenu)}
      >
        <img src={userPlusIcon} alt="Signup" className="w-5 h-5" />
        Signup
      </button>

      {/* Signup menu */}
      <div
        className={`absolute top-16 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-xl p-6 w-96 
        transition-all duration-300 ease-in-out ${
          showSignupMenu ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <h3 className="text-lg font-semibold text-center mb-4">Signup as a</h3>
        <div className="flex flex-col gap-4">
          <button
            className="w-full py-3 bg-black text-white rounded-full hover:bg-green-600 transition"
            onClick={() => handleClick("/student-signup")}
          >
            Student
          </button>
          <button
            className="w-full py-3 bg-black text-white rounded-full hover:bg-green-600 transition"
            onClick={() => handleClick("/teacher-signup")}
          >
            Teacher
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderButtons;





