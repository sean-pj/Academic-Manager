import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <button
          onClick={() => {
            handleClick("/student");
          }}
        >
          Student Dashboard
        </button>
        <button
          onClick={() => {
            handleClick("/teacher");
          }}
        >
          Teacher Dashboard
        </button>
      </div>
    </div>
  );
}

export default App;
