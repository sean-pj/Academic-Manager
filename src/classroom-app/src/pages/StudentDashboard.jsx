import { useState } from "react";
import CourseItem from "../components/CourseItem.jsx";
import NavigationButton from "../components/NavigationButton.jsx";
import ExperienceBar from "../components/ExperienceBar.jsx";
import GradeItem from "../components/GradeItem.jsx";
import UserProfile from "../components/StudentHome.jsx";
import StarsCounter from "../components/StarsCounter.jsx";
import Header from "../homepage-components/Header.jsx";
import { logout } from "../services/api.js";
import { useNavigate } from "react-router-dom";
import Profile from "./student-pages/Profile.jsx";
import Assignment from "./student-pages/Assignment.jsx";

function StudentDashboard() {
  const [selectedSection, setSelectedSection] = useState("home");

  const navigate = useNavigate();

  // Stub data for Homework assignments
  const stubAssignments = [
    {
      id: 1,
      title: "Math Assignment 1",
      dueDate: "Due: 2025-04-10",
    },
    {
      id: 2,
      title: "History Assignment 2",
      dueDate: "Due: 2025-04-12",
    },
    {
      id: 3,
      title: "Science Assignment 3",
      dueDate: "Due: 2025-04-15",
    },
  ];

  const renderSectionContent = () => {
    if (selectedSection === "courses") {
      return (
        <>
          <h2>Your Classes</h2>
          <div className="py-4 flex flex-col gap-5">
            <CourseItem />
          </div>
        </>
      );
    } else if (selectedSection === "grades") {
      return (
        <>
          <h2>Your Grades</h2>
          <div className="py-4 flex flex-col gap-5">
            <GradeItem />
          </div>
        </>
      );
    } else if (selectedSection === "assignments") {
      return (
        <>
          <h2>Your Homework</h2>
          <Assignment></Assignment>
        </>
      );
    } else if (selectedSection === "profile") {
      return (
        <Profile></Profile>
      )
    } else {
      return (
        <div className="bg-white rounded-2xl outline-2 outline-gray-200 flex justify-center items-center gap-10">
          <div className="flex flex-col gap-8">
            <UserProfile />
            <div>
              <p className="py-3">One more homework to finish until next level!</p>
              <ExperienceBar />
            </div>
          </div>
          <img src="\src\assets\illustration.jpg" className="w-[400px]" alt="Illustration" />
        </div>
      );
    }
  };

  return (
    <div>
      <nav className="w-full relative p-4 border-b-2 border-gray-200">
        <span className="absolute">
          <Header />
        </span>
        <span className="w-full flex justify-center gap-5">
          <NavigationButton
            imgSrc="\src\assets\school.svg"
            onClick={() => setSelectedSection("home")}
            other={"bg-green-400 text-black"}
            text="HOME"
            isActive={selectedSection === "home"}
          />
          <NavigationButton
            imgSrc="\src\assets\folder-open.svg"
            onClick={() => setSelectedSection("courses")}
            other={"bg-blue-400 text-black"}
            text="CLASSES"
            isActive={selectedSection === "courses"}
          />
          <NavigationButton
            imgSrc="\src\assets\book-check.svg"
            onClick={() => setSelectedSection("grades")}
            other={"bg-red-400 text-black"}
            text="GRADES"
            isActive={selectedSection === "grades"}
          />
         
          <NavigationButton
            imgSrc="\src\assets\notebook-pen.svg"
            onClick={() => setSelectedSection("assignments")}
            other={"bg-orange-300 text-black"}
            text="HOMEWORK"
            isActive={selectedSection === "assignments"}
          />
            <NavigationButton
            imgSrc="\src\assets\profile.svg"
            onClick={() => setSelectedSection("profile")}
            other={"bg-gray-400 text-black"}
            text="PROFILE"
          />
          <StarsCounter stars={4} />
        </span>
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

      <div className="p-8">{renderSectionContent()}</div>
    </div>
  );
}

export default StudentDashboard;








