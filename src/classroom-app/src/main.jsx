import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App.jsx';
import StudentDashboard from './StudentDashboard.jsx';
import TeacherDashboard from './TeacherDashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/student" ,
    element: <StudentDashboard></StudentDashboard>,
  }, 
  {
    path: "/teacher",
    element: <TeacherDashboard></TeacherDashboard>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);