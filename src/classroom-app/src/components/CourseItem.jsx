import { useState, useEffect } from "react";
import { get } from "../services/api.js";

function CourseItem() {
  const [classrooms, setClassrooms] = useState([]);

  // Api call
  useEffect(() => {
    const getData = async () => {
      const result = await get("/classrooms/");
      setClassrooms(result);
      console.log(result)
    };
    getData();
  }, []);

  if (classrooms?.length == 0 ) {
    return (
      <p>No classes yet! Talk with your teacher.</p>
    )
  }

  return (
    classrooms.map((room) => (
      <div className="p-3 border-2 border-gray-300 rounded-lg bg-white flex justify-between items-center">
        <span className="font-medium text-gray-800" key={`title ${room.id}`}>{room.title} - {room.sectionName} </span>
        <span className="text-sm text-gray-500" key={`teacher ${room.id}`}>Teacher: {room.teacher.first_name} {room.teacher.last_name}</span>
      </div>
    ))
  );
}

export default CourseItem;
