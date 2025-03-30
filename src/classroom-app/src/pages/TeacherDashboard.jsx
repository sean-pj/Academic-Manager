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
  const [editGrade, setEditGrade] = useState(""); // To store edited grade for individual students
  const [currentGrade, setCurrentGrade] = useState(""); // To store current grade

  // Form states for new student data
  const [studentUsername, setStudentUsername] = useState("");
  const [stars, setStars] = useState({}); // Store stars for each student by ID
  const [editingStarsFor, setEditingStarsFor] = useState(null); // Track which student stars are being edited
  const [starInput, setStarInput] = useState(""); // Track input for new star count

  const navigate = useNavigate();

  // Get the date
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Simulated data for grades (stub data)
  const simulatedGrades = [
    { id: 1, student: "Emma Johnson", course: "Basic Math", grade: "A" },
    { id: 2, student: "Liam Smith", course: "Science Experiments", grade: "B" },
    { id: 3, student: "Sophia Brown", course: "Creative Writing", grade: "A-" },
    { id: 4, student: "Noah Williams", course: "Advanced Algebra", grade: "C+" },
  ];

  const fetchData = (section) => {
    if (section === "students") {
      // Placeholder for student data
    } else if (section === "grades") {
      setGrades(simulatedGrades); // Setting simulated grades for now
    } else if (section === "analytics") {
      const simulatedAnalytics = [
        { id: 1, name: "Emma Johnson", currentGrade: 92, level: 5, xp: 1500, badges: ["Math Whiz"], stars: 0 },
        { id: 2, name: "Liam Smith", currentGrade: 88, level: 4, xp: 1200, badges: ["Science Explorer"], stars: 0 },
        // Additional students here...
      ];
      setAnalytics(simulatedAnalytics);
      // Initialize stars for each student
      const starsData = simulatedAnalytics.reduce((acc, student) => {
        acc[student.id] = student.stars || 0;
        return acc;
      }, {});
      setStars(starsData);
    }
  };

  // Handle form submission for adding a student (example, stubbed for now)
  const handleSubmit = async (event) => {
    event.preventDefault();

    const studentData = { name: studentUsername };

    // Simulate API call
    alert("Student added successfully!");
    setIsFormVisible(false); // Hide form after submission
  };

  // Handle updating grades (simulate API interaction)
  const handleGradeUpdate = async (studentId, updatedGrade) => {
    setGrades((prevGrades) =>
      prevGrades.map((grade) =>
        grade.id === studentId ? { ...grade, grade: updatedGrade } : grade
      )
    );
    alert("Grade updated successfully!");
  };

  // Handle grade edit toggle
  const handleGradeEditClick = (grade) => {
    setCurrentGrade(grade.grade);
    setEditGrade(grade.grade); // Pre-fill the input field with current grade
    setIsFormVisible(true); // Show the grade input form
  };

  // Handle star form submission
  const handleStarSubmit = (event, studentId) => {
    event.preventDefault();
    const newStarCount = parseInt(starInput, 10);
    if (!isNaN(newStarCount) && newStarCount >= 0) {
      setStars((prevStars) => {
        const newStars = { ...prevStars };
        newStars[studentId] = newStarCount; // Set the new star count for the student
        return newStars;
      });
      setEditingStarsFor(null); // Close the star edit form
      setStarInput(""); // Reset star input field
      alert("Stars updated successfully!");
    } else {
      alert("Please enter a valid number of stars.");
    }
  };

  // Render section content
  const renderSectionContent = () => {
    if (selectedSection === "students") {
      return (
        <>
          <h2>Your Students</h2>
          <div className="py-4 flex flex-col gap-5">
            <p>No classes yet, click the button below to add a student!</p>
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
                <label className="block" htmlFor="studentUserName">Username</label>
                <input
                  type="text"
                  id="studentUserName"
                  value={studentUsername}
                  onChange={(e) => setStudentUsername(e.target.value)}
                  className="p-2 border rounded-lg w-50"
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
          <h2>Manage Grades</h2>
          {grades.map((grade) => (
              <div key={grade.id} className="p-4 bg-gray-100 rounded-lg mb-4 border border-gray-300">
                <div className="flex justify-between">
                  <div className="flex gap-4 items-center">
                    <div>
                      <strong>{grade.student}</strong> - {grade.course}
                    </div>
                    <div className="flex gap-2 items-center">
                      <span>Current Grade: {grade.grade}</span>
                      <button
                        onClick={() => handleGradeEditClick(grade)}
                        className="p-2 bg-green-500 rounded-full"
                      >
                        {/* Placeholder for your edit icon */}
                        <img src="/src/assets/edit.svg" alt="Edit" style={{ width: "24px", height: "24px" }} />
                      </button>
                      <div className="flex items-center gap-2">
                        <span>Stars: {stars[grade.id] || 0}</span>
                        <button
                          onClick={() => {
                            setEditingStarsFor(grade.id); // Open star edit form for this student
                          }}
                          className="p-2 bg-yellow-500 rounded-full"
                        >
                          
                          <img src="/src/assets/stars.svg" alt="Star" style={{ width: "24px", height: "24px" }} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {isFormVisible && currentGrade === grade.grade && (
                  <div className="mt-4">
                    <input
                      type="text"
                      value={editGrade}
                      onChange={(e) => setEditGrade(e.target.value)}
                      className="p-2 border rounded-lg w-32"
                    />
                    <button
                      onClick={() => handleGradeUpdate(grade.id, editGrade)}
                      className="bg-blue-500 text-white p-2 ml-4 rounded-lg"
                    >
                      Save
                    </button>
                  </div>
                )}

                {editingStarsFor === grade.id && (
                  <form onSubmit={(e) => handleStarSubmit(e, grade.id)} className="mt-4">
                    <input
                      type="number"
                      value={starInput}
                      onChange={(e) => setStarInput(e.target.value)}
                      className="p-2 border rounded-lg w-32"
                      min="0"
                    />
                    <button
                      type="submit"
                      className="bg-blue-500 text-white p-2 ml-4 rounded-lg"
                    >
                      Save Stars
                    </button>
                  </form>
                )}
              </div>
          ))}
          <div className="py-4 flex flex-col gap-5">
            { /* <GradeItem></GradeItem> */ }
          </div>
        </>
      );
    } else if (selectedSection === "analytics") {
      return (
        <>
          <h2>Student Analytics</h2>
          <div className="py-4 flex flex-col gap-5">
            {analytics.map((student) => (
              <div key={student.id} className="p-4 bg-gray-100 rounded-lg border border-gray-300">
                <strong>{student.name}</strong> - Grade: {student.currentGrade}, Level: {student.level}, XP: {student.xp}, Badges: {student.badges.join(", ")}, Stars: {student.stars}
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
              imgSrc="/src/assets/school.svg"
              onClick={() => setSelectedSection("dashboard")}
              other={"bg-green-400 text-black"}
              text="HOME"
            />
            <NavigationButton
              imgSrc="/src/assets/folder-open.svg"
              onClick={() => {
                setSelectedSection("students");
                fetchData("students");
              }}
              other={"bg-blue-400 text-black"}
              text="STUDENTS"
            />
            <NavigationButton
              imgSrc="/src/assets/notebook-pen.svg"
              onClick={() => {
                setSelectedSection("analytics");
                fetchData("analytics");
              }}
              other={"bg-orange-300 text-black"}
              text="ANALYTICS"
            />
            <NavigationButton
              imgSrc="/src/assets/manage.svg"
              onClick={() => {
                setSelectedSection("grades");
                fetchData("grades");
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








