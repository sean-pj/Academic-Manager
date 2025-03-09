import { useState, useEffect } from "react";
import api from "../services/api.js";

function CourseItem() {
  const [courses, setCourses] = useState([]);

  // Api call
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
          <div key={`course ${course.id}`} className="p-3 border-2 border-gray-300 rounded-lg bg-white flex justify-between items-center">
            <span key={`title ${course.id}`} className="font-medium text-gray-800">{course.title}</span>
            <span key={`teachers ${course.id}`} className="text-sm text-gray-500">
              Teacher(s): 
              {course.teachers.map((teacher) => (
                <span key={`teacher ${teacher.id}`}> {teacher.first_name} {teacher.last_name}</span>
              ))}
            </span>
          </div>
        ))
      )}
    </>
  );
}

export default CourseItem;
