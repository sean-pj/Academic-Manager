import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../services/api";

function StudentRoute({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await get("/users/");
                setUser(result[0]);
            } catch (error) {
                console.error("Error fetching user:", error);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (!user?.student) {
        console.log("unauthorized");
        return <Navigate to="/" />;
    }

    return children;
};

export default StudentRoute;
