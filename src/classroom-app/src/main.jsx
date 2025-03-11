import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./pages/App.jsx";
import StudentDashboard from "./pages/StudentDashboard.jsx";
import TeacherDashboard from "./pages/TeacherDashboard.jsx";
import Login from './pages/Login';
import StudentSignup from "./pages/StudentSignup.jsx";
import TeacherSignup from "./pages/TeacherSignup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/student",
    element: <StudentDashboard></StudentDashboard>,
  },
  {
    path: "/teacher",
    element: <TeacherDashboard></TeacherDashboard>,
  },
  {
    path: "/login",  
    element: <Login />,
  },
  {
    path: "/student-signup",
    element: <StudentSignup></StudentSignup>
  },
  {
    path: "/teacher-signup",
    element: <TeacherSignup></TeacherSignup>
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
