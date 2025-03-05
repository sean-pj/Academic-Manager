import { useState, useEffect } from "react";
import { get } from "./services/api";
import React from 'react';
import Courses from "./Courses.jsx";
import styles from './App.module.css';

function App() {

  return (
    <div className={styles.main}>
      <h1>Home Page</h1>
      <button>Student Dashboard</button>
      <button>Teacher Dashboard</button>
    </div>
  );
}

export default App;
