import { useState, useEffect } from "react";
import api from "../services/api.js";
import axios from "axios";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await api.get("/courses/");
        setCourses(result.data);
      } catch (error) {
        console.log("api error");
      }
    };

    getData();
  }, []);

  return (
    <>
      {courses.length === 0 ? (
        <p>No courses yet! Talk with your teacher.</p>
      ) : (
        courses.map((course) => (
          <div key="course-info">
            <div key={course.id}>{course.title}</div>
            <h3>Students:</h3>
            {course.students.map((student) => (
              <div key={student.id}>{student.username}</div>
            ))}
            <h3>Teachers:</h3>
            {course.teachers.map((teacher) => (
              <div key={teacher.id}>{teacher.username}</div>
            ))}
          </div>
        ))
      )}
    </>
  );
}

export default Courses;
