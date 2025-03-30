import { useState, useEffect } from "react";

function Grades() {
    const [stars, setStars] = useState({});
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [editingStarsFor, setEditingStarsFor] = useState(null); // Track which student stars are being edited
    const [starInput, setStarInput] = useState(""); // Track input for new star count
    const [grades, setGrades] = useState([]);
    const [editGrade, setEditGrade] = useState(""); // To store edited grade for individual students
    const [currentGrade, setCurrentGrade] = useState(""); // To store current grade

    // Simulated data for grades (stub data)
    const simulatedGrades = [
        { id: 1, student: "Emma Johnson", course: "Basic Math", grade: "A" },
        { id: 2, student: "Liam Smith", course: "Science Experiments", grade: "B" },
        { id: 3, student: "Sophia Brown", course: "Creative Writing", grade: "A-" },
        { id: 4, student: "Noah Williams", course: "Advanced Algebra", grade: "C+" },
    ];

    // Set grades only once when the component mounts
    useEffect(() => {
        setGrades(simulatedGrades);
    }, []);

    // Handle updating grades (simulate API interaction)
    const handleGradeUpdate = async (studentId, updatedGrade) => {
        setGrades((prevGrades) =>
            prevGrades.map((grade) =>
                grade.id === studentId ? { ...grade, grade: updatedGrade } : grade
            )
        );
        alert("Grade updated successfully!");
    };

    // Handle grade edit toggle
    const handleGradeEditClick = (grade) => {
        setCurrentGrade(grade.grade);
        setEditGrade(grade.grade); // Pre-fill the input field with current grade
        setIsFormVisible(true); // Show the grade input form
    };

    // Handle star form submission
    const handleStarSubmit = (event, studentId) => {
        event.preventDefault();
        const newStarCount = parseInt(starInput, 10);
        if (!isNaN(newStarCount) && newStarCount >= 0) {
            setStars((prevStars) => {
                const newStars = { ...prevStars };
                newStars[studentId] = newStarCount; // Set the new star count for the student
                return newStars;
            });
            setEditingStarsFor(null); // Close the star edit form
            setStarInput(""); // Reset star input field
            alert("Stars updated successfully!");
        } else {
            alert("Please enter a valid number of stars.");
        }
    };

    return (
        <>
            <h2>Manage Grades</h2>
            {grades.map((grade) => (
                <div key={grade.id} className="p-4 bg-gray-100 rounded-lg mb-4 border border-gray-300">
                    <div className="flex justify-between">
                        <div className="flex gap-4 items-center">
                            <div>
                                <strong>{grade.student}</strong> - {grade.course}
                            </div>
                            <div className="flex gap-2 items-center">
                                <span>Current Grade: {grade.grade}</span>
                                <button
                                    onClick={() => handleGradeEditClick(grade)}
                                    className="p-2 bg-green-500 rounded-full"
                                >
                                    <img src="/src/assets/edit.svg" alt="Edit" style={{ width: "24px", height: "24px" }} />
                                </button>
                                <div className="flex items-center gap-2">
                                    <span>Stars: {stars[grade.id] || 0}</span>
                                    <button
                                        onClick={() => {
                                            setEditingStarsFor(grade.id); // Open star edit form for this student
                                        }}
                                        className="p-2 bg-yellow-500 rounded-full"
                                    >
                                        <img src="/src/assets/stars.svg" alt="Star" style={{ width: "24px", height: "24px" }} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {isFormVisible && currentGrade === grade.grade && (
                        <div className="mt-4">
                            <input
                                type="text"
                                value={editGrade}
                                onChange={(e) => setEditGrade(e.target.value)}
                                className="p-2 border rounded-lg w-32"
                            />
                            <button
                                onClick={() => handleGradeUpdate(grade.id, editGrade)}
                                className="bg-blue-500 text-white p-2 ml-4 rounded-lg"
                            >
                                Save
                            </button>
                        </div>
                    )}

                    {editingStarsFor === grade.id && (
                        <form onSubmit={(e) => handleStarSubmit(e, grade.id)} className="mt-4">
                            <input
                                type="number"
                                value={starInput}
                                onChange={(e) => setStarInput(e.target.value)}
                                className="p-2 border rounded-lg w-32"
                                min="0"
                            />
                            <button type="submit" className="bg-blue-500 text-white p-2 ml-4 rounded-lg">
                                Save Stars
                            </button>
                        </form>
                    )}
                </div>
            ))}
            <div className="py-4 flex flex-col gap-5">
                { /* <GradeItem></GradeItem> */ }
            </div>
        </>
    );
}

export default Grades;
