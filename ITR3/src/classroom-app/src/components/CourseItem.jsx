import { useState, useEffect } from "react";
import { get } from "../services/api.js";

function CourseItem() {
  const [classrooms, setClassrooms] = useState([]);
  const [loading, setLoading] = useState(true);

  // Api call
  useEffect(() => {
    const getData = async () => {
      const result = await get("/classrooms/");
      setClassrooms(result);
      setLoading(false);
    };
    getData();
  }, []);

  if (loading) {
    return (
      <p>Loading...</p>
    )
  }

  if (classrooms?.length == 0 ) {
    return (
      <p>No classes yet! Talk with your teacher.</p>
    )
  }

  return (
    <div>
      {classrooms.map((room) => (
        <div key={room.id} className="p-3 border-2 border-gray-300 rounded-lg bg-white flex justify-between items-center">
          <span key={`title ${room.id}`} className="font-medium text-gray-800">{room.title} - {room.sectionName} </span>
          <span key={`teacher ${room.id}`} className="text-sm text-gray-500">Teacher: {room.teacher.first_name} {room.teacher.last_name}</span>
        </div>
      ))}
    </div>
  );
}

export default CourseItem;
