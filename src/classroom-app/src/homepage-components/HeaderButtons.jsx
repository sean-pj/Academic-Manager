// src/components/HeaderButtons.jsx
import React from 'react';
// Import the SVG files as image URLs
import userIcon from '../assets/user.svg';
import userPlusIcon from '../assets/user-plus.svg';

function HeaderButtons() {
  return (
    <div className="flex space-x-4">
      <button className="text-black hover:text-green-600 bg-transparent border-none flex items-center gap-2">
        Home
      </button>
      <button className="text-black hover:text-green-600 bg-transparent border-none flex items-center gap-2">
        About
      </button>
      <button className="text-black hover:text-green-600 bg-transparent border-none flex items-center gap-2">
        Support
      </button>
      <button className="text-black hover:text-green-600 bg-transparent border-none flex items-center gap-2">
        {/* Login button with icon */}
        <img src={userIcon} alt="Login" className="w-5 h-5" />
        Login
      </button>
      <button className="text-black hover:text-green-600 bg-transparent border-none flex items-center gap-2">
        {/* Signup button with icon */}
        <img src={userPlusIcon} alt="Signup" className="w-5 h-5" />
        Signup
      </button>
    </div>
  );
}

export default HeaderButtons;



