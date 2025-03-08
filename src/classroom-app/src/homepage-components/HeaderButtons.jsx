import React from 'react';
import { useNavigate } from 'react-router-dom';
import userIcon from '../assets/user.svg';
import userPlusIcon from '../assets/user-plus.svg';

function HeaderButtons() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

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
      <button className="text-black hover:text-green-600 bg-transparent border-none flex items-center gap-2"
      onClick={() => handleClick("/login")}>
        <img src={userIcon} alt="Login" className="w-5 h-5" />
        Login
      </button>
      <button className="text-black hover:text-green-600 bg-transparent border-none flex items-center gap-2">
        <img src={userPlusIcon} alt="Signup" className="w-5 h-5" />
        Signup
      </button>
    </div>
  );
}

export default HeaderButtons;




