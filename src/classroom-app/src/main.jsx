import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./pages/App.jsx";
import StudentDashboard from "./pages/StudentDashboard.jsx";
import TeacherDashboard from "./pages/TeacherDashboard.jsx";
import Login from './pages/Login';
import StudentSignup from "./pages/StudentSignup.jsx";

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
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
