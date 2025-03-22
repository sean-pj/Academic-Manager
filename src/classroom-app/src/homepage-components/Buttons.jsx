// src/components/ButtonGroup.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { get } from '../services/api';

function Buttons() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");

  // Api call
  useEffect(() => {
    const getData = async () => {
      const result = await get("/users/");
      setUser(result[0]);
    };
    getData();
  }, []);

  return (
    <div className="flex gap-4 mt-4">
      <button
        className="px-20 py-3 bg-black text-white rounded-full hover:bg-green-600 transition"
        onClick={() => {
          if (user.student != null) {
            navigate("/student");
          } else {
            navigate("/student-signup")
          }
        }}
      >
        Student 
      </button>
      <button
        className="px-20 py-3 bg-black text-white rounded-full hover:bg-green-600 transition"
        onClick={() => {
          if (user.teacher != null) {
            navigate("/teacher");
          } else {
            navigate("/teacher-signup")
          }
        }}
      >
        Teacher
      </button>
    </div>
  );
}

export default Buttons;
