import { useState, useEffect } from "react";
import "./App.css";
import { get } from "./services/api";
import Courses from "./Courses.jsx"

function StudentDashboard () {
  const [selectedSection, setSelectedSection] = useState("dashboard");
  const [grades, setGrades] = useState([]);
  const [assignments, setAssignments] = useState([]);

  // Fetch data for the selected section
  const fetchData = (section) => {
    if (section === "courses") {
      //
    } else if (section === "grades") {
      const simulatedGrades = [
        { id: 1, courseName: "Basic Math", grade: "A" },
        { id: 2, courseName: "Science Experiments", grade: "B" },
        { id: 3, courseName: "Creative Writing", grade: "A-" },
      ];
      setGrades(simulatedGrades);
    } else if (section === "assignments") {
      const simulatedAssignments = [
        { id: 1, title: "Math Homework", dueDate: "2023-10-15" },
        { id: 2, title: "Science Project", dueDate: "2023-10-20" },
        { id: 3, title: "Essay Draft", dueDate: "2023-10-18" },
      ];
      setAssignments(simulatedAssignments);
    }
  };

  // Render section content
  const renderSectionContent = () => {
    if (selectedSection === "courses") {
      return (
        <>
          <h2>Your Courses</h2>
          <Courses></Courses>
        </>
      );
    } else if (selectedSection === "grades") {
      return (
        <>
          <h2>Your Grades</h2>
          <ul>
            {grades.map((grade) => (
              <li key={grade.id}>
                {grade.courseName}: {grade.grade}
              </li>
            ))}
          </ul>
        </>
      );
    } else if (selectedSection === "assignments") {
      return (
        <>
          <h2>Your Assignments</h2>
          <ul>
            {assignments.map((assignment) => (
              <li key={assignment.id}>
                {assignment.title} - Due: {assignment.dueDate}
              </li>
            ))}
          </ul>
        </>
      );
    } else {
      return <h2>Welcome to Your Dashboard</h2>;
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>Student Dashboard</h1>
        <nav className="header-btns">
          <img src="\src\assets\dashboard.svg"></img>
          <button onClick={() => setSelectedSection("dashboard")}>Dashboard</button>
          <img src="\src\assets\courses.svg"></img>
          <button onClick={() => { setSelectedSection("courses"); fetchData("courses"); }}>
            Courses
          </button>
          <img src="\src\assets\grades.svg"></img>
          <button onClick={() => { setSelectedSection("grades"); fetchData("grades"); }}>
            Grades
          </button>
          <img src="\src\assets\assign.svg"></img>
          <button onClick={() => { setSelectedSection("assignments"); fetchData("assignments"); }}>
            Assignments
          </button>
        </nav>
      </header>

      <main>{renderSectionContent()}</main>
    </div>
  );
}

export default StudentDashboard;
