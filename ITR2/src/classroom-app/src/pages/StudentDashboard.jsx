import { useState, useEffect } from "react";
import { get } from "../services/api.js";
import Courses from "../components/Courses.jsx";
import NavigationButton from "../components/NavigationButton.jsx";
import ExperienceBar from "../components/ExperienceBar.jsx";
import HomeworkItem from "../components/HomeworkItem.jsx";
import GradeItem from "../components/GradeItem.jsx";

function StudentDashboard() {
  const [selectedSection, setSelectedSection] = useState("dashboard");
  const [grades, setGrades] = useState([]);
  const [assignments, setAssignments] = useState([]);

  // Get the date
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
          <h2>Your Classes</h2>
          <Courses></Courses>
        </>
      );
    } else if (selectedSection === "grades") {
      return (
        <>
          <h2>Your Grades</h2>
          <div className="py-4 flex flex-col gap-5">
            {grades.map((grade) => (
              <GradeItem
                key={grade.id}
                title={grade.courseName}
                mark={grade.grade}
              />
            ))}
          </div>
        </>
      );
    } else if (selectedSection === "assignments") {
      return (
        <>
          <h2>Your Homework</h2>
          <div className="py-4 flex flex-col gap-5">
            {assignments.map((assignment) => (
              <HomeworkItem
                key={assignment.id}
                title={assignment.title}
                dueDate={assignment.dueDate}
              />
            ))}
          </div>
        </>
      );
    } else {
      return (
        <>
          <h2>Welcome, Student!</h2>
          <p className="text-gray-600">Today is {today}</p>
          <ExperienceBar />
        </>
      );
    }
  };

  return (
    <div>
      <div>
        {/* <h1>Student Dashboard</h1> */}
        <nav className="w-full p-4 flex justify-center gap-5 border-b-2 border-gray-200">
          <NavigationButton
            imgSrc="\src\assets\school.svg"
            onClick={() => setSelectedSection("dashboard")}
            other={"bg-green-400 text-black"}
            text="HOME"
          />

          <NavigationButton
            imgSrc="\src\assets\folder-open.svg"
            onClick={() => {
              setSelectedSection("courses");
              fetchData("courses");
            }}
            other={"bg-blue-400 text-black"}
            text="COURSES"
          />

          <NavigationButton
            imgSrc="\src\assets\book-check.svg"
            onClick={() => {
              setSelectedSection("grades");
              fetchData("grades");
            }}
            other={"bg-red-400 text-black"}
            text="GRADES"
          />

          <NavigationButton
            imgSrc="\src\assets\notebook-pen.svg"
            onClick={() => {
              setSelectedSection("assignments");
              fetchData("assignments");
            }}
            other={"bg-orange-300 text-black"}
            text="HOMEWORK"
          />
        </nav>
      </div>

      <main className="p-8">{renderSectionContent()}</main>
    </div>
  );
}

export default StudentDashboard;
