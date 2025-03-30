import { useState, useEffect } from "react";

function Analytics() {
    const [analytics, setAnalytics] = useState([]);
    const [stars, setStars] = useState({}); // Store stars for each student by ID

    useEffect(() => {
        const simulatedAnalytics = [
            { id: 1, name: "Emma Johnson", currentGrade: 92, level: 5, xp: 1500, badges: ["Math Whiz"], stars: 0 },
            { id: 2, name: "Liam Smith", currentGrade: 88, level: 4, xp: 1200, badges: ["Science Explorer"], stars: 0 },
        ];
        setAnalytics(simulatedAnalytics);

        // Initialize stars for each student
        const starsData = simulatedAnalytics.reduce((acc, student) => {
            acc[student.id] = student.stars || 0;
            return acc;
        }, {});
        setStars(starsData);
    }, []);

    return (
        <div className="py-4 flex flex-col gap-5">
            {analytics.map((student) => (
                <div key={student.id} className="p-4 bg-gray-100 rounded-lg border border-gray-300">
                    <strong>{student.name}</strong> - Grade: {student.currentGrade}, Level: {student.level}, XP: {student.xp}, 
                    Badges: {student.badges.join(", ")}, Stars: {stars[student.id] || 0}
                </div>
            ))}
        </div>
    );
}

export default Analytics;
