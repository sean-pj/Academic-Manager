import { useState, useEffect } from "react";
import { get } from "../../services/api";

function Assignment() {
    const [file, setFile] = useState(null);
    const [openFormId, setOpenFormId] = useState(null);
    const [assignments, setAssignments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [duedate, setDueDate] = useState("");

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };
    
    const handleSubmitFile = (event) => {
    event.preventDefault();

    if (file) {
        // BACKEND API CALL GOES HERE
        alert("File submitted successfully!"); // TEMPORARY – this would be removed once API is active
        setFile(null);
        setOpenFormId(null);
    } else {
        alert("Please select a file to submit.");
    }
    };

    // Api call
    useEffect(() => {
    const getData = async () => {
        const result = await get("/assignments/");
        setAssignments(result);
    };
    getData();
    setLoading(false);
    
    }, []);

    if (loading || assignments?.length == 0) {
    return (
        <p>No classes yet! Talk with your teacher.</p>
    )
    }

    return (
        <div className="py-4 flex flex-col gap-5">
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
              <div
                key={assignment.id}
                className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col gap-2"
              >
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="font-semibold text-lg">{assignment.title}</span>
                    <span className="text-sm text-gray-500 pl-1">{formattedDueDate}</span>
                  </div>

                  {/* Plus icon (only visible if form is not open for this assignment) */}
                  {openFormId !== assignment.id && (
                    <button
                      onClick={() => setOpenFormId(assignment.id)}
                      className="bg-green-500 text-white p-3 rounded-full flex items-center justify-center self-start"
                    >
                      <img src="/src/assets/plus.svg" alt="Plus" className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* File submission form (only for the active assignment) */}
                {openFormId === assignment.id && (
                  <form onSubmit={handleSubmitFile} className="mt-2 flex flex-col gap-3">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept="application/pdf, image/*, .docx, .txt"
                      className="border p-2 rounded-lg"
                    />
                    <div className="flex gap-3">
                      <button
                        type="submit"
                        className="bg-green-500 text-white p-2 rounded-full px-6 flex justify-center"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        onClick={() => setOpenFormId(null)}
                        className="bg-black text-white p-2 rounded-full px-6 flex justify-center"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )})}
          </div>
    );
}

export default Assignment;