// src/pages/App.jsx
import React from 'react';
import Header from '../homepage-components/Header';
import Buttons from '../homepage-components/Buttons'; 
import HeaderButtons from '../homepage-components/HeaderButtons';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="absolute top-0 right-0 p-4 flex gap-6">
      {/* Header buttons*/}
    <HeaderButtons />
      </div>
        <nav className="w-full p-9 flex justify-center gap-5 border-b-2 border-gray-200"></nav>
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




