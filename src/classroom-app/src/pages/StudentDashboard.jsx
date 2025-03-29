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

function StudentDashboard() {
  const [selectedSection, setSelectedSection] = useState("dashboard");
  const [file, setFile] = useState(null);
  const [openFormId, setOpenFormId] = useState(null);
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

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmitFile = (event) => {
    event.preventDefault();

    if (file) {
      //  BACKEND API CALL GOES HERE 
      // Example: Use fetch or axios to send `file` and `assignment` info to the Django backend.
      // You can use FormData to send a multipart/form-data request.

      /*
      const formData = new FormData();
      formData.append("assignment_title", stubAssignments.find(a => a.id === openFormId)?.title);
      formData.append("uploaded_file", file);

      fetch("http://localhost:8000/upload/", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (!response.ok) throw new Error("Failed to upload");
          alert("File submitted successfully!");
        })
        .catch((error) => {
          alert("Error submitting file");
          console.error(error);
        });
      */

      //  END API CALL 

      alert("File submitted successfully!"); // TEMPORARY – this would be removed once API is active
      setFile(null);
      setOpenFormId(null);
    } else {
      alert("Please select a file to submit.");
    }
  };

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
          <div className="py-4 flex flex-col gap-5">
            {stubAssignments.map((assignment) => (
              <div
                key={assignment.id}
                className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col gap-2"
              >
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="font-semibold text-lg">{assignment.title}</span>
                    <span className="text-sm text-gray-500 pl-1">{assignment.dueDate}</span>
                  </div>

                  {/* Plus icon (only visible if form is not open for this assignment) */}
                  {openFormId !== assignment.id && (
                    <button
                      onClick={() => setOpenFormId(assignment.id)}
                      className="bg-green-500 text-white p-3 rounded-full flex items-center justify-center self-start"
                    >
                      <img src="/src/assets/plus.svg" alt="Plus" className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* File submission form (only for the active assignment) */}
                {openFormId === assignment.id && (
                  <form onSubmit={handleSubmitFile} className="mt-2 flex flex-col gap-3">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept="application/pdf, image/*, .docx, .txt"
                      className="border p-2 rounded-lg"
                    />
                    <div className="flex gap-3">
                      <button
                        type="submit"
                        className="bg-green-500 text-white p-2 rounded-full px-6 flex justify-center"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        onClick={() => setOpenFormId(null)}
                        className="bg-black text-white p-2 rounded-full px-6 flex justify-center"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                )}
              </div>
            ))}
          </div>
        </>
      );
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
            onClick={() => setSelectedSection("dashboard")}
            other={"bg-green-400 text-black"}
            text="HOME"
            isActive={selectedSection === "dashboard"}
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

      <main className="p-8">{renderSectionContent()}</main>
    </div>
  );
}

export default StudentDashboard;






