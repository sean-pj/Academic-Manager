import { useState, useEffect } from "react";
import api, { get } from "../../services/api";
function Students() {

    const [isFormVisible, setIsFormVisible] = useState(false);
    const [studentUsername, setStudentUsername] = useState("");

    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [duedate, setDueDate] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const response = await api.post("/teachers/", {
          student_username: studentUsername
      }, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })
        console.log(response)
      } catch (err) {
        throw err
      }
    }
    
    // Api call
    useEffect(() => {
      const getData = async () => {
        const result = await get("/students/");
        setStudents(result);
        // console.log(result)
      };
      getData();
      setLoading(false);
      
    }, [handleSubmit]);

    if (loading) {
      <h2>Loading...</h2>
    }
  
    if (students?.length == 0) {
      return (
        <p>No students yet</p>
      )
    }

    return (
        <>
          <div className="py-4 flex flex-col gap-5">
              {students.map((student) => {

                const birthDate = new Date(student.date_of_birth);
                const formattedBirthDate = birthDate.toLocaleString('en-US', {
                  year: 'numeric', // '2025'
                  month: 'long',   // 'March'
                  day: 'numeric',  // '31'
                });
                return (
                  <div className="p-3 border-2 border-gray-300 rounded-lg bg-white flex justify-between items-center">
                  <span key={`name ${student.id}`} className="font-medium text-gray-800"> {student.username} ({student.first_name} {student.last_name}) </span>
                  <span key={`teacher ${student.id}`} className="text-sm text-gray-500">Birthday: {formattedBirthDate}</span>
                  </div>
                )
              })}
            <button
              className="bg-green-500 text-white p-2 rounded-lg w-32"
              onClick={() => setIsFormVisible(!isFormVisible)}
            >
              Add Student
            </button>
          </div>

          {/* Show the Add Student form if isFormVisible is true */}
          {isFormVisible && (
            <form onSubmit={handleSubmit} className="mt-5 p-4 border rounded-lg w-60">
              <div>
                <label className="block" htmlFor="studentUserName">Username</label>
                <input
                  type="text"
                  id="studentUserName"
                  value={studentUsername}
                  onChange={(e) => setStudentUsername(e.target.value)}
                  className="p-2 border rounded-lg w-50"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white p-2 mt-4 rounded-lg"
              >
                Submit
              </button>
            </form>
          )}
        
        </>
    )
}

export default Students;