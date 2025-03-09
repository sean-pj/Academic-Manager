import { useState, useEffect } from "react";
import {get} from "../services/api.js";

function StudentHome() {
  const [user, setUser] = useState();

  // Get the date
  const today = new Date().toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

// Api call
useEffect(() => {
  const getData = async () => {
    const result = await get("/users/");
    setUser(result[0]);
  };
  getData();
}, []);

return (
  <>
    <h2>Welcome, {user && user.first_name !=  "" ? user.first_name : "Student"}!</h2>
    <p className="text-gray-600">Today is {today}</p>
  </>
);
}

export default StudentHome;
