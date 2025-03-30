import { useState, useEffect } from "react";
import { get, logout } from "../services/api.js";
import NavigationButton from "../components/NavigationButton.jsx";
import Header from "../homepage-components/Header.jsx";
import { useNavigate } from "react-router-dom";
import Analytics from "./teacher-pages/Analytics.jsx";
import Grades from "./teacher-pages/Grades.jsx";
import Students from "./teacher-pages/Students.jsx";

function TeacherDashboard() {
  const [selectedSection, setSelectedSection] = useState("dashboard");

  const navigate = useNavigate();

  // Get the date
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Render section content
  const renderSectionContent = () => {
    if (selectedSection === "students") {
      return (
        <>
          <h2>Your Students</h2>
          <Students></Students>
        </>
      );
    } else if (selectedSection === "grades") {
      return (
        <>
          <Grades></Grades>
        </>
      )
    } else if (selectedSection === "analytics") {
      return (
        <>
          <h2>Student Analytics</h2>
          <Analytics></Analytics>
        </>
      );
    } else {
      return (
        <>
          <h2>Welcome, Teacher!</h2>
          <p className="text-gray-600">Today is {today}</p>
         
        </>
      );
    }
  };

  return (
    <div>
      <div>
        <nav className="w-full relative p-4 border-b-2 border-gray-200">
          <span className="absolute">
            <Header />
          </span>
          <span className="w-full flex justify-center gap-5">
            <NavigationButton
              imgSrc="/src/assets/school.svg"
              onClick={() => setSelectedSection("dashboard")}
              other={"bg-green-400 text-black"}
              text="HOME"
            />
            <NavigationButton
              imgSrc="/src/assets/folder-open.svg"
              onClick={() => {
                setSelectedSection("students");
              }}
              other={"bg-blue-400 text-black"}
              text="STUDENTS"
            />
            <NavigationButton
              imgSrc="/src/assets/notebook-pen.svg"
              onClick={() => {
                setSelectedSection("analytics");
              }}
              other={"bg-orange-300 text-black"}
              text="ANALYTICS"
            />
            <NavigationButton
              imgSrc="/src/assets/manage.svg"
              onClick={() => {
                setSelectedSection("grades");
              }}
              other={"bg-purple-300 text-black"}
              text="MANAGE"
            />
          </span>

          {/* Logout */}
          <span className="top-4 right-4 absolute flex justify-end">
            <NavigationButton
              imgSrc="/src/assets/log-out.svg"
              onClick={() => {
                logout();
                navigate("/");
              }}
              other={"bg-yellow-400 text-black"}
              text="LOGOUT"
            />
          </span>
        </nav>
      </div>

      <div className="p-8">{renderSectionContent()}</div>
    </div>
  );
}

export default TeacherDashboard;








