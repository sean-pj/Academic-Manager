// src/components/Header.jsx
import React from 'react';

function Header() {
  return (
    <div className="text-left relative"> 
      <h1 className="text-4xl font-bold text-green-500">greenbar</h1>
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-green-500 rounded-full group-hover:w-32 transition-all duration-300"></div>
    </div>
  );
}

export default Header;

