// src/pages/App.jsx
import React from 'react';
import Header from '../homepage-components/Header';
import Buttons from '../homepage-components/Buttons'; 

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <Header /> 
        <p className="text-5xl font-bold mb-4">I am a</p>
        <Buttons /> 
      </div>
    </div>
  );
}

export default App;



