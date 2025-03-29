import { useState, useEffect } from "react";
import CourseItem from "../components/CourseItem.jsx";
import NavigationButton from "../components/NavigationButton.jsx";
import ExperienceBar from "../components/ExperienceBar.jsx";
import AssignmentItem from "../components/AssignmentItem.jsx";
import GradeItem from "../components/GradeItem.jsx";
import UserProfile from "../components/StudentHome.jsx";
import StarsCounter from "../components/StarsCounter.jsx";
import Header from "../homepage-components/Header.jsx";
import { get, logout } from "../services/api.js";
import { useNavigate } from "react-router-dom";

function StudentDashboard() {
  const [selectedSection, setSelectedSection] = useState("dashboard");
  const navigate = useNavigate();


  // Render section content
  const renderSectionContent = () => {
    if (selectedSection === "courses") {
      return (
        <>
          <h2>Your Classes</h2>
          <div className="py-4 flex flex-col gap-5">
            <CourseItem></CourseItem>
          </div>
        </>
      );
    } else if (selectedSection === "grades") {
      return (
        <>
          <h2>Your Grades</h2>
          <div className="py-4 flex flex-col gap-5">
              <GradeItem></GradeItem>
          </div>
        </>
      );
    } else if (selectedSection === "assignments") {
      return (
        <>
          <h2>Your Homework</h2>
          <div className="py-4 flex flex-col gap-5">
              <AssignmentItem></AssignmentItem>
          </div>
        </>
      );
    } else {
      return (
        <div className="bg-white rounded-2xl outline-2 outline-gray-200 flex justify-center items-center gap-10">
          <div className="flex flex-col gap-8">
            <UserProfile></UserProfile>

            <div>
              <p className="py-3">
                One more homework to finish until next level!
              </p>
              <ExperienceBar />
            </div>
          </div>
          <img src="\src\assets\illustration.jpg" className="w-[400px]"></img>
        </div>
      );
    }
  };

  return (
    <div>
      <div>
        {/* <h1>Student Dashboard</h1> */}
        <nav className="w-full relative p-4 border-b-2 border-gray-200">
          {/* Greenbar title */}
          <span className="absolute"> 
            <Header />
          </span>
          <span className="w-full flex justify-center gap-5"> 
            <NavigationButton
              imgSrc="\src\assets\school.svg"
              onClick={() => setSelectedSection("dashboard")}
              other={"bg-green-400 text-black"}
              text="HOME"
              isActive={selectedSection === "dashboard"}
            />

            <NavigationButton
              imgSrc="\src\assets\folder-open.svg"
              onClick={() => {
                setSelectedSection("courses");
              }}
              other={"bg-blue-400 text-black"}
              text="CLASSES"
              isActive={selectedSection === "courses"}
            />

            <NavigationButton
              imgSrc="\src\assets\book-check.svg"
              onClick={() => {
                setSelectedSection("grades");
              }}
              other={"bg-red-400 text-black"}
              text="GRADES"
              isActive={selectedSection === "grades"}
            />

            <NavigationButton
              imgSrc="\src\assets\notebook-pen.svg"
              onClick={() => {
                setSelectedSection("assignments");
              }}
              other={"bg-orange-300 text-black"}
              text="HOMEWORK"
              isActive={selectedSection === "assignments"}
            />

            {/* Star counter */}
            <StarsCounter stars={4} />
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

export default StudentDashboard;
