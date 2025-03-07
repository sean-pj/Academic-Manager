// src/pages/App.jsx
import React from 'react';
import Header from '../homepage-components/Header';
import Buttons from '../homepage-components/Buttons'; 

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="absolute top-0 left-0 p-4"> 
        <Header /> 
      </div>
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-5xl font-bold mb-4">I am a</p>
          <Buttons /> 
        </div>
      </div>
    </div>
  );
}

export default App;




