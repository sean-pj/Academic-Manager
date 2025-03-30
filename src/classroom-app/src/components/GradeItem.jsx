import { useState, useEffect } from "react";
import { get } from "../services/api.js";

function GradeItem() {
  const [grades, setGrades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [duedate, setDueDate] = useState("");

  // Api call
  useEffect(() => {
    const getData = async () => {
      const result = await get("/grades/");
      setGrades(result);
      setLoading(false);
    //   console.log(result)
    };
    getData();
    
  }, []);

  if (loading) {
    return (
      <p>Loading...</p>
    )
  }

  if (grades?.length == 0) {
    return (
      <p>No grades yet! Talk with your teacher.</p>
    )
  }

  return (
    <div className="p-3 border-2 border-gray-300 rounded-lg bg-white flex justify-between items-center">
      {grades.map((grade) => {
        return (
          <>
              <span key={`title ${grade.id}`} className="font-medium text-gray-800">{grade.submission.assignment.title} | Grade: {grade.mark}% </span>
              <span key={`due ${grade.id}`} className="text-sm text-gray-500"> Student: {grade.submission.student.first_name} {grade.submission.student.last_name}</span>
          </>
        )
      })}
    </div>
  );
}

export default GradeItem;