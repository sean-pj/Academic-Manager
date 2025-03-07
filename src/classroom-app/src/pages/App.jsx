// src/pages/App.jsx
import React from 'react';
import Header from '../homepage-components/Header';
import Buttons from '../homepage-components/Buttons'; 
import HeaderButtons from '../homepage-components/HeaderButtons';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Buttons in top-right */}
      <div className="absolute top-0 right-0 p-4 flex gap-6">
        <HeaderButtons />
      </div>

      {/* Navigation Bar */}
      <nav className="w-full p-9 flex justify-center gap-5 border-b-2 border-gray-200"></nav>

      {/* Header Section */}
      <div className="absolute top-0 left-0 p-4">
        <Header />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center h-screen mt-[-100px] text-center">
        {/* Welcome Text */}
        <p className="text-8xl font-bold mb-2">
          <span className="text-black">Welcome to</span> <span className="text-green-600">greenbar</span>
        </p>
        {/* Subheading */}
        <p className="text-4xl font-semibold text-green-600 mb-4">enhance your classroom experience</p>
        
        {/* "I am a" Text */}
        <p className="text-3xl font-semibold mb-4">I am a</p>
        
        {/* Buttons Component */}
        <Buttons />
      </div>
    </div>
  );
}

export default App;







