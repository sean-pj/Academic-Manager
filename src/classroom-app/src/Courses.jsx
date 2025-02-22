import { useState, useEffect } from "react";
import api from "./services/api.js";
import axios from "axios";

function Courses() {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
      const getData = async () => {
        try {
          const result = await api.get("/courses/");
          setCourses(result.data)
        } catch (error) {
          console.log("api error")
        } 
      };

      getData();
    }, []);

    return (
        <ul>
          {courses.map(course => (
            <li key={course.id}>{course.title}</li>
          ))}
        </ul>
    )
}

export default Courses