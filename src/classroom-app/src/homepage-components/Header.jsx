// src/components/Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {

  const navigate = useNavigate();

  return (
    <div className="text-left">
      <h1 className="text-4xl font-bold text-green-600 relative group border-0 bg-gray-100 cursor-pointer" onClick={() => {navigate("/")}}>greenbar</h1>
    </div>
    
  );
}

export default Header;


