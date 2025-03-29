import { useState, useEffect } from "react";
import { get, logout } from "../services/api.js";
import NavigationButton from "../components/NavigationButton.jsx";
import GradeItem from "../components/GradeItem.jsx";
import CourseItem from "../components/CourseItem.jsx";
import Header from "../homepage-components/Header.jsx";
import { useNavigate } from "react-router-dom";

function TeacherDashboard() {
  const [selectedSection, setSelectedSection] = useState("dashboard");
  const [grades, setGrades] = useState([]);
  const [analytics, setAnalytics] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Form states for new student data
  const [studentUsername, setStudentUsername] = useState(""); // Changed from studentName to studentUsername

  const navigate = useNavigate();

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
      // Simulate the courses section content
    } else if (section === "grades") {
      const simulatedGrades = [
        { id: 1, courseName: "Basic Math", grade: "A" },
        { id: 2, courseName: "Science Experiments", grade: "B" },
        { id: 3, courseName: "Creative Writing", grade: "A-" },
      ];
      setGrades(simulatedGrades);
    } else if (section === "analytics") {
      const simulatedAnalytics = [
        { id: 1, name: "Emma Johnson", currentGrade: 92, level: 5, xp: 1500, badges: ["Math Whiz", "Creative Thinker"] },
        { id: 2, name: "Liam Smith", currentGrade: 88, level: 4, xp: 1200, badges: ["Science Explorer"] },
        { id: 3, name: "Sophia Brown", currentGrade: 95, level: 6, xp: 1800, badges: ["Writing Star", "History Buff"] },
        { id: 4, name: "Noah Williams", currentGrade: 79, level: 3, xp: 900, badges: ["Diligent Learner"] },
        { id: 5, name: "Olivia Davis", currentGrade: 85, level: 4, xp: 1100, badges: ["Music Enthusiast", "Participation Pro"] },
      ];
      setAnalytics(simulatedAnalytics);
    }
  };

  // Form submission handling
  const handleSubmit = async (event) => {
    event.preventDefault();

    const studentData = {
      name: studentUsername, // Send the username
    };

    // Replace with API call to submit data to Django backend
    // const response = await fetch("API_URL_HERE", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(studentData),
    // });

    // Assuming the response is successful:
    alert("Student added successfully!");
    setIsFormVisible(false); // Hide the form after submission
  };

  // Render section content
  const renderSectionContent = () => {
    if (selectedSection === "students") {
      return (
        <>
          <h2>Your Students</h2>
          <div className="py-4 flex flex-col gap-5">
            <p>No students yet, click the button below to add a student!</p>
            <button
              className="bg-green-500 text-white p-2 rounded-lg w-32"
              onClick={() => setIsFormVisible(true)}
            >
              Add Student
            </button>
          </div>

          {/* Show the Add Student form if isFormVisible is true */}
          {isFormVisible && (
            <form onSubmit={handleSubmit} className="mt-5 p-4 border rounded-lg w-60">
              <div>
                <label className="block" htmlFor="studentUsername">Username</label>
                <input
                  type="text"
                  id="studentUsername" // Corrected input ID
                  value={studentUsername} // Updated to studentUsername
                  onChange={(e) => setStudentUsername(e.target.value)} 
                  className="p-2 border rounded-lg w-full" 
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white p-2 mt-4 rounded-lg"
              >
                Submit
              </button>
            </form>
          )}
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
    } else if (selectedSection === "analytics") {
      return (
        <>
          <h2>Student Analytics</h2>
          <div className="py-4 flex flex-col gap-5">
            {analytics.map((student) => (
              <div key={student.id} className="p-4 bg-gray-100 rounded-md">
                <strong>{student.name}</strong> - Grade: {student.currentGrade}, Level: {student.level}, XP: {student.xp}, Badges: {student.badges.join(", ")}
              </div>
            ))}
          </div>
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
              imgSrc="\src\assets\school.svg"
              onClick={() => setSelectedSection("dashboard")}
              other={"bg-green-400 text-black"}
              text="HOME"
            />
            <NavigationButton
              imgSrc="\src\assets\folder-open.svg"
              onClick={() => {
                setSelectedSection("students");
                fetchData("students");
              }}
              other={"bg-blue-400 text-black"}
              text="STUDENTS"
            />
            <NavigationButton
              imgSrc="\src\assets\notebook-pen.svg"
              onClick={() => {
                setSelectedSection("analytics");
                fetchData("analytics");
              }}
              other={"bg-orange-300 text-black"}
              text="ANALYTICS"
            />
            <NavigationButton
              imgSrc="\src\assets\manage.svg"
              onClick={() => {
                setSelectedSection("manage");
              }}
              other={"bg-purple-300 text-black"}
              text="MANAGE"
            />
          </span>

          {/* Logout */}
          <span className="top-4 right-4 absolute flex justify-end">
            <NavigationButton
              imgSrc="\src\assets\log-out.svg"
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
      <main className="p-8">{renderSectionContent()}</main>
    </div>
  );
}

export default TeacherDashboard;



