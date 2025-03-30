import { useState, useEffect } from "react";
function Students() {

    const [isFormVisible, setIsFormVisible] = useState(false);
    const [studentUsername, setStudentUsername] = useState("");

    const handleSubmit = () => {
        
    }

    return (
        <>
          <div className="py-4 flex flex-col gap-5">
            <p>No classes yet, click the button below to add a student!</p>
            <button
              className="bg-green-500 text-white p-2 rounded-lg w-32"
              onClick={() => setIsFormVisible(true)}
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