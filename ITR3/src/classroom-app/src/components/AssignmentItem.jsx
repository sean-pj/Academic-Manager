import { useState, useEffect } from "react";
import { get } from "../services/api.js";

function AssignmentItem() {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [duedate, setDueDate] = useState("");

  // Api call
  useEffect(() => {
    const getData = async () => {
      const result = await get("/assignments/");
      setAssignments(result);
    };
    getData();
    setLoading(false);
    
  }, []);

  if (loading) {
    return (
      <h2>Loading... </h2>
    )
  }

  if (assignments?.length == 0) {
    return (
      <p>No classes yet! Talk with your teacher.</p>
    )
  }

  return (
    <div>
      {assignments.map((assignment) => {
        
        const dueDate = new Date(assignment.due_date);
        const formattedDueDate = dueDate.toLocaleString('en-US', {
          weekday: 'long', // 'Monday'
          year: 'numeric', // '2025'
          month: 'long',   // 'March'
          day: 'numeric',  // '31'
          hour: 'numeric', // '11 PM'
          minute: 'numeric', // '59'
          second: 'numeric', // '00'
          hour12: true,     // 12-hour clock (AM/PM)
        });

        return (
          <div key={assignment.id} className="p-3 border-2 border-gray-300 rounded-lg bg-white flex justify-between items-center">
                <span key={`title ${assignment.id}`} className="font-medium text-gray-800">{assignment.title} </span>
                <span key={`due ${assignment.id}`} className="text-sm text-gray-500">Due: {formattedDueDate}</span>
          </div>
        )
      })}
    </div>
  );
}

export default AssignmentItem;
